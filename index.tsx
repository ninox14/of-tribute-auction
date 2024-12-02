import * as ReactDOM from "react-dom/client";
import { Component } from "./src/component";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Component message="Sup!" />);
