
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';



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
      <AboutMe/>
      <Experience/>
      <Skills />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )

}

<ToastContainer/>
export default App;
