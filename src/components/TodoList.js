import { useState } from 'react';

function TodoList() {
  const initialState = [
    {
      task: '1st task',
      isCompleted: false
    },
    {
      task: '2nd task',
      isCompleted: false
    },
    {
      task: '3rd task',
      isCompleted: false
    },
  ]

  const [todos, setTodos] = useState(initialState);
  const [task, setTask] = useState('');

  const handleNewTask = event => {
    setTask(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      // React Tutorial way:
      // const _todos = todos.slice();
      // _todos.push({ task, isCompleted: false });
      setTodos([...todos, { task, isCompleted: false }])
      setTask('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      Add Task: <input value={ task } placeholder="Add New Task" onChange={handleNewTask} onKeyPress={handleKeyPress}/>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={ index }>{ todo.task }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
