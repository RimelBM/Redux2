import React from "react";
import { render } from "react-dom";
import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from './store'





const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById("root"));