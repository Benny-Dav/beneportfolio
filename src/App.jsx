
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Webdev from './components/WebDevInfo';


function App() {
  //  const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Header/>
  //   },
  //   {
  //     path:"/about",
  //     element:<About/>
  //   },
  //   {
  //     path:"/skills",
  //     element:<Skills/>
  //   },
  //   {
  //     path:"/portfolio",
  //     element:<Portfolio/>
  //   },
  //   {
  //     path:"/footer",
  //     element:<Footer/>
  //   }
    
  //  ])

  return (
    <>
      <Header />
      <Webdev />
      <Skills />
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App;
