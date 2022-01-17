import './App.css';
import Container from 'react-bootstrap/Container'
import { Counter } from './Components/Counter'
import { Toggle } from './Components/Toggle'
import { TodoList } from './Components/TodoList'
import {data} from './data'


function App() {
  return (
    <Container className="border bg-light text-center">
      <h1>My first React App</h1>

       <Counter />
       <Toggle />
       <TodoList data={data} />




    </Container>
  );
}

export default App;
