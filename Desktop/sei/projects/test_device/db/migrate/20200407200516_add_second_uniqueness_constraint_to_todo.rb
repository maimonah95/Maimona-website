class AddSecondUniquenessConstraintToTodo < ActiveRecord::Migration[5.2]
  def change
    add_index :todos, [:title, :created_on], unique: true
  end
end
