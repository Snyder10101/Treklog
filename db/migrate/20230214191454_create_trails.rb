class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :location
      t.string :distance
      t.string :duration
      t.string :difficulty
      t.text :description
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
