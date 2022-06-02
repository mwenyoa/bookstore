import { Routes, Route } from 'react-router-dom';
import './App.css';
import BooksList from './components/BookList';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
