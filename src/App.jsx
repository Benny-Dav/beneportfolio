
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Webdev from './components/WebDevInfo';
import Contact from './components/Contact';


function App() {
  //  const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Header/>
  //   },
  //   {
  //     path:"/about",
  //     element:<<WebDev>
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
  //     path:"/contact",
  //     element:<Contact/>
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
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
