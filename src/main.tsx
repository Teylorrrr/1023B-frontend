import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
       <Body />
       <Footer />
  </StrictMode>,
)
