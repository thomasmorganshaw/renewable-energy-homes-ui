import React from 'react';
import './App.css';
import Layout from "./pages/layout";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
  state = {
    isSearching: false,
    searchResults: null,
    postcodeCoordinates: null,
    hasResult: false
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;