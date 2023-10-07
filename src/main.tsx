import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { MantineProvider } from "@mantine/core";
// import { MantineProvider } from "@mantine/core";
// import "@mantine/core/styles.css";

// import {
//   MantineProvider,
//   CSSVariablesResolver,
//   createTheme,
// } from "@mantine/core";

// const themeOverride = createTheme({
//   other: {
//     highlightColor: "#212121",
//   },
// });

// const resolver: CSSVariablesResolver = (theme) => ({
//   variables: {
//     "--table-striped-color": theme.other.highlightColor,
//     // "--table-highlight-on-hover-color": theme.other.highlightColor,
//   },
//   light: {
//     "--mantine-color-deep-orange": theme.other.deepOrangeLight,
//   },
//   dark: {
//     "--mantine-color-deep-orange": theme.other.deepOrangeDark,
//   },
// });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider >
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
