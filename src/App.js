import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Scoresheet from "./Components/Scoresheet";

function App() {
  return (
        <div className="App">
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
            </head>
            <header>
                <Router>
                    <Route exact path="/" component={Scoresheet}></Route>
                </Router>
            </header>
        </div>
  );
}

export default App;
