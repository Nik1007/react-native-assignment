import { createStore } from "redux";
import Reducer from "./reducer.js";
let Store = createStore(Reducer);
export default Store;
