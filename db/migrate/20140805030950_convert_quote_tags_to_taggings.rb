class ConvertQuoteTagsToTaggings < ActiveRecord::Migration
  def change
    change_table :taggings do |t|
      t.rename :quote_id, :taggable_id
      t.string :taggable_type
      t.string :context, limit: 128
      t.references :tagger, polymorphic: true
      t.timestamps
      t.index [:tag_id, :taggable_id, :taggable_type, :context, :tagger_id, :tagger_type],
              unique: true, name: 'taggings_idx'
      t.index [:taggable_id, :taggable_type, :context]
    end

    reversible do |dir|
      dir.up do
        ActsAsTaggableOn::Tagging.update_all(context: 'tags', taggable_type: 'Quote')
      end
      dir.down do
      end
    end
  end
end
