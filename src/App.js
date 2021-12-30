import { Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import About from "./pages/about"
import Home from "./pages/home"
import Nav from "./components/nav"
import Footer from "./components/footer"
import Contact from "./pages/contact"
import Services from "./pages/services"
import CategoryProducts from "./pages/categoryProducts"
import NotFound from "./pages/notFound"
import Checkout from "./pages/checkout"

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="services" element={<Services />} />
        <Route path="category/:cat_slug" element={<CategoryProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App