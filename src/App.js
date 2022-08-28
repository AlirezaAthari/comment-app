import './App.css';
import { Routes , Route} from 'react-router-dom'
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import NewCommentPage from './Pages/NewCommentPage';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      
    <Layout>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='new-comment' element={<NewCommentPage/>}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
