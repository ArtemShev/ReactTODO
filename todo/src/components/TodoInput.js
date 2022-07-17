const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div class="input-group input-group-lg mb-3">
      <input
        type="text"
        name="todo"
        value={todo}
        className="form-control"
        placeholder="Добавьте новое дело"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button class="btn btn-outline-secondary" onClick={addTodo}>
        Добавить
      </button>
    </div>
  );
};

export default TodoInput;
