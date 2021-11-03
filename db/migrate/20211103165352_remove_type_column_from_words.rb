class RemoveTypeColumnFromWords < ActiveRecord::Migration[6.1]
  def change
    remove_column :words, :type, :string
  end
end
