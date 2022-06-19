import Router from "presentation/container/Router/";
import "normalize.css";
import "presentation/styles/global.css";
import GlobalStyle from "presentation/styles/GloalStyle";
import { store } from "application/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
