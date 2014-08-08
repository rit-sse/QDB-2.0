class Quote < ActiveRecord::Base
  acts_as_taggable
  validates :body, presence: true

  scope :approved, -> { where(approved: true) }
  scope :needs_approval, -> { where(approved: nil) }
  scope :by_tagged, -> tag { tagged_with(tag) }

  def self.tags
    approved.inject([]) { |all, quote| all + quote.tags }.uniq
  end
end
