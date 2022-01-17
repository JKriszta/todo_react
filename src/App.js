import './App.css';
import Container from 'react-bootstrap/Container'
import { Counter } from './Components/Counter'
import { Toggle } from './Components/Toggle'
import { Todo } from './Components/Todo'


function App() {
  return (
    <Container className="border bg-light text-center">
      <h1>My first React App</h1>

       <Counter />
       <Toggle />
       <Todo />




    </Container>
  );
}

export default App;
