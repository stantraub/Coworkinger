class RemoveWifiColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spaces, :wifi_included, :boolean
  end
end
