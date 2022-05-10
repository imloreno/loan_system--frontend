import Router from "presentation/container/Router/";
import "normalize.css";
import GlobalStyle from "presentation/styles/GloalStyle";

function App() {
  return (
    <>
      <img
        src="https://cdn.dribbble.com/users/819177/screenshots/4717044/attachments/1063545/2.0_probe_hle__transakce_a_probi_haji_ci_.png"
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10,
          // opacity: "0.4",
          opacity: "0",
        }}
        alt="dsf"
      />
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
