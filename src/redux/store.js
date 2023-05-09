import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const reducer = () => {
	return console.log(typeof reducer);
};

const store = configureStore({ reducer }, rootReducers);

export default store;
