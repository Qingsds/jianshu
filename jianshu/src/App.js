import Header from "./components/header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/detail/loadable.js";
import store from "./store";
import Login from "./components/login";
import Write from "./components/write";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:title" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
