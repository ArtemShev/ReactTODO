const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
      <div class="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button class="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    );
  };

  export default TodoInput;