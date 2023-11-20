import './App.css';
import {Header} from './components/Header';
import TaskCards from './components/task/TaskCards';

function App() {
  return (
    <div className="app box-border m-0 p-0">
      <Header/>
      <TaskCards/>
    </div>
  );
}

export default App;
