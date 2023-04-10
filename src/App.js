//import from react redux
import { Provider } from "react-redux";
//import store
import store from "./store/store";
//import homePage
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
