import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
       <Body />
       <Footer />
=======
// import './index.css'
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Body></Body>
    <Footer></Footer>
>>>>>>> c9e89bfee27423f69d5bde0a5cfc589880fbb112
  </StrictMode>,
)
