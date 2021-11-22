import Header from "./components/header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/detail";
import store from "./store";
import Login from "./components/login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="detail/:title" element={<Detail />}>
            {/* <Route path=":title" element={<Detail />}></Route> */}
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
