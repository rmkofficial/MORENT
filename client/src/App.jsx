import { Provider } from "react-redux";
import { store } from "./store/store"; // Redux store'u import et
import HomePage from "./pages/HomePage"; // HomePage import et

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Redux Provider ile tüm uygulamayı sarmala */}
      <div>
        <HomePage /> {/* Tüm sayfayı sarmalayan HomePage */}
      </div>
    </Provider>
  );
}

export default App;
