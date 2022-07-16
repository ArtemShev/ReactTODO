const TodoList = ({ list, remove }) => {
    return (
      <>
        {list?.length > 0 ? (
          <ul class="todo-list">
            {list.map((entry, index) => (
              <div class="todo">
                <li key={index}> {entry} </li>

                <button
                  class="delete-button"
                  onClick={() => {
                    remove(entry);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div class="empty">
            <p>No task found</p>
          </div>
        )}
      </>
    );
  };

  export default TodoList;