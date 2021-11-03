class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :term
      t.string :example
      t.string :img_url
      t.string :translation
      t.string :type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
