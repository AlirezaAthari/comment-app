import './App.css';
import { Routes , Route} from 'react-router-dom'
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import Layout from './Layout/Layout';
import FullComment from './Pages/FullComment/FullComment';
import NewComment from './Pages/NewComment/NewComment';

function App() {
  return (
    <div className="App">
      
    <Layout>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='comments/:id' element={<FullComment  />}></Route>
        <Route path='new-comment' element={<NewComment/>}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
