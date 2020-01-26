class AddTier1Columns < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :neighborhood, :string
    add_column :spaces, :office_capacity, :integer
    add_column :spaces, :people_capacity, :integer
    add_column :spaces, :availability, :boolean
    add_column :spaces, :desk_day, :boolean
  end
end
