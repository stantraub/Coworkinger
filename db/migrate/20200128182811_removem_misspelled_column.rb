class RemovemMisspelledColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spaces, :printers_incuded, :boolean
  end
end
