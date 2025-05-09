import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          {/* Renders the matching child route of a parent route or nothing if no child route matches. */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
