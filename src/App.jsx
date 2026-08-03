
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer';
import Home from './pages/Home';
import BookADate from './pages/BookADate';


function App() {
  const { pathname } = useLocation();
  const isDatePlanner = pathname.startsWith('/book-a-date');

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/book-a-date" element={<BookADate />} />
        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>

      {!isDatePlanner && <Footer />}

    </>
  )

}

export default App;
