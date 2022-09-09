import './App.css';
import Logo from "../src/components/Logo"
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="task-application">
     <Logo/>
     <div className='main-task-list'>
        <h1>Tasks</h1>
        {/* <Task text="Aprender react" complete={false}/> */}
        {/* <TaskForm/> */}
        <TaskList></TaskList>
     </div>
    </div>
  );
}

export default App;
