class CreateSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
        t.string :name, null: false
        t.string :address, null: false
        t.string :city, null: false
        t.string :state, null: false
        t.integer :zipcode, null: false
        t.text :description, null: false
        t.string :email, null: false
        t.string :parking, null: false
        t.boolean :wifi_included, null: false
        t.string :phone, null: false
        t.string :website
        t.integer :cost, null: false
        t.string :open_hour, null: false
        t.string :closing_hour, null: false
      t.timestamps
    end
  end
end
