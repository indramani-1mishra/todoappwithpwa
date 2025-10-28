

export default function Showtodo({ todos, dispatch, removeTodo }) {
  return (
    <>
      {todos && todos.length > 0 ? (
        <ul className="mt-4">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              {item.todotext}
              <button
                onClick={() => dispatch(removeTodo({ id: item.id }))}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please add a todo</p>
      )}
    </>
  );
}
