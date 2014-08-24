require 'rails_helper'

RSpec.describe Quote, :type => :model do
  context "validations" do
    it { should validate_presence_of :body }
  end

  context "scopes" do
    before do
      @approved = create(:approved_quote)
      @unapproved = create(:unapproved_quote)
      @denied = create(:denied_quote)
    end

    context "approved" do
      subject { Quote.approved }

      it { is_expected.to have(1).item }
      it { is_expected.to include(@approved) }
      it { is_expected.to_not include(@unapproved) }
      it { is_expected.to_not include(@denied) }
    end

    context "needs_approval" do
      subject { Quote.needs_approval }

      it { is_expected.to have(1).item }
      it { is_expected.to include(@unapproved) }
      it { is_expected.to_not include(@approved) }
      it { is_expected.to_not include(@denied) }
    end
  end

  context "tags" do
    before do
      create(:approved_quote)
      create(:unapproved_quote)
      create(:denied_quote)
    end

    subject { Quote.tags }

    it { is_expected.to have(3).items }
    it { is_expected.to include(*ActsAsTaggableOn::Tag.named_any(["tags", "are", "cool"])) }
  end
end
