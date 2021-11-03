class CreateJoinTableLanguagesWords < ActiveRecord::Migration[6.1]
  def change
    create_join_table :languages, :words do |t|
      # t.index [:language_id, :word_id]
      # t.index [:word_id, :language_id]
    end
  end
end
