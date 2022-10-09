import React, { Component } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";
import Navbar from "./Components/Navbar";
// import Football from './Components/Football'
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path=""
              element={<News key="world" keyi="world" country="us" />}
            />
            <Route
              path="/national"
              element={<News key="nation" keyi="nation" country="in" />}
            />
            <Route
              path="/entertainment"
              element={
                <News key="entertainment" keyi="entertainment" country="in" />
              }
            />
            <Route
              path="/sports"
              element={<News key="sports" keyi="sports" country="in" />}
            />
            <Route
              path="/science"
              element={<News keyi="science" key="science" country="in" />}
            />
            <Route
              path="/health"
              element={<News key="health" keyi="health" country="in" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
