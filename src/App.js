import HeaderBar from "./component/layout/HeaderBar";
import Banner from "./component/layout/Banner";
import MovieList from "./component/layout/MovieList";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/";
  return (
    <Provider store={store}>
      <Router>
        <HeaderBar />
        <Banner />
        <Container>
          <MovieList />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
