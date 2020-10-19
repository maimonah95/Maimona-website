class AddExestingFieldToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :created_on,:date
  end
end
