import './App.css';
import Discussion from './Container/Discussion/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header>Comment App
        <ToastContainer position='top-center'/>
      </header>
      <Discussion/>
    </div>
  );
}

export default App;
