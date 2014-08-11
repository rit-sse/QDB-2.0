class RenameQuoteTagsToTaggings < ActiveRecord::Migration
  def change
    rename_table :quotes_tags, :taggings
  end
end
