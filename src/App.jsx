import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import Service from './Service'
import Footer from './Footer'
import { Switch,Route, Redirect } from 'react-router-dom'
const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route  path="/about" exact component={About}/>
          <Route  path="/contact"  exact component={Contact}/>
          <Route  path="/service"  exact component={Service}/>
          <Redirect to="/" />
        </Switch>
         <Footer/>
        </>
    )
}
export default App