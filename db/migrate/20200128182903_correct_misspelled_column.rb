class CorrectMisspelledColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :printers_included, :boolean
  end
end
