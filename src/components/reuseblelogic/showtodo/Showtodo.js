export default function Showtodo({ todos, dispatch, removeTodo }) {
  return (
    <div className="w-full mt-6">
      {todos && todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white border border-gray-200 shadow-sm px-4 py-3 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <span className="text-gray-800 font-medium tracking-wide">
                {item.todotext}
              </span>
              <button
                onClick={() => dispatch(removeTodo({ id: item.id }))}
                className="text-red-500 hover:text-red-700 transition duration-200 transform hover:scale-110"
                title="Delete todo"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center italic mt-6">
          Please add a todo 😊
        </p>
      )}
    </div>
  );
}
