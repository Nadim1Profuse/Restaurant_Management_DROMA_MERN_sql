import NavbarSidebar from "./Components/NavbarSidebar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavbarSidebar />
      </Provider>
    </div>
  );
}

export default App;
