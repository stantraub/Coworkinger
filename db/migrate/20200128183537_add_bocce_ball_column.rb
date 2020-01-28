class AddBocceBallColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :bocce_ball, :boolean
  end
end
