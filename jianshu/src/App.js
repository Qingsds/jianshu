import Header from "./components/header";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
