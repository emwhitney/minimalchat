import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import "./App.scss";
import Join from "./components/Join";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={(props: RouteComponentProps<any>) => (
          <Join />
        )}/>
        <Route path="/chat"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
