import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import LightDarkMode from './components/LightDarkMode'
import { store } from './store'
import { Provider } from 'react-redux';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
    console.log(todos)
   
  }
  console.log(todo);

  return (
    <Provider store={store}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </Provider>
  );
}

export default App;
