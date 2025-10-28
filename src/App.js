
import { Provider } from 'react-redux';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';
import { todostore } from './redux/todostore';

function App() {
  return (
    <>
    <Provider store={todostore}>
      <TodoApp/>
    </Provider>
    </>
  );
}

export default App;
