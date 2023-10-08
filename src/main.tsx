import React from "react";
import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <Provider store={store}>
      <MantineProvider >
        <App />
      </MantineProvider>
    </Provider>
  </MantineProvider>
);
