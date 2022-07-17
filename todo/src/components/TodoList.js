const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <div class="input-group input-group-lg mb-3">
          {list.map((entry, index) => (
            <div class="input-group input-group-lg mb-2">
              <li key={index} class="list-group-item w-75 ">
                {" "}
                {entry}{" "}
              </li>

              <button
                class="btn btn-outline-warning"
                onClick={() => {
                  remove(entry);
                }}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div class="text-warning">
          <p className="fs-3">Дел нет</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
