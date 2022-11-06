import "./App.css";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <TaskList />

      <div className='BusinessContext'>
        <header></header>
        <div className='Content'>
          <div className='Msg'></div>
          <div className='Info'></div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
