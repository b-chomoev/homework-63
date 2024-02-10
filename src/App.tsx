import Appbar from './components/Appbar/Appbar';
import {Route, Routes} from 'react-router-dom';
import Posts from './containers/Posts/Posts';
import NewPost from './containers/NewPost/NewPost';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Post from './containers/Post/Post';

const App = () => (
  <>
    <header>
      <Appbar />
    </header>
    <main className='container container-fluid'>
      <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/new-post' element={<NewPost/>} />
        <Route path='/posts/:id' element={<Post/>} />
        <Route path='/posts/:id/edit' element={<NewPost/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='*' element={<h1 className='mt-5 text-center'>Oops! I guess it is the wrong path</h1>} />
      </Routes>
    </main>
  </>
);

export default App;
