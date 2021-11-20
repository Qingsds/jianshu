import Header from "./components/header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Detail from './components/detail'
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
