class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.date :date
      t.boolean :state
      t.references :habit, index: true

      t.timestamps
    end
  end
end
