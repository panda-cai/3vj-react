import React from "react";
import Home from '../views/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
function router(){
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
}

export default router