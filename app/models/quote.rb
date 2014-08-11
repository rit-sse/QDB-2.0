class Quote < ActiveRecord::Base
  acts_as_taggable
  validates :body, presence: true

  default_scope { order("id DESC") }

  scope :approved, -> { where(approved: true) }
  scope :needs_approval, -> { where(approved: nil) }
  scope :by_tag, -> tag { tagged_with(tag) }
  scope :search, -> query {  where("body LIKE ? or description LIKE ?", "%#{query}%", "%#{query}%") }

  def self.tags
    approved.inject([]) { |all, quote| all + quote.tags }.uniq
  end
end
