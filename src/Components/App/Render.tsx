
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function Bootstrap() {
    return <React.StrictMode><App/></React.StrictMode>    
}

const portalDiv = document.getElementById('root');

const root = createRoot(portalDiv);
     root.render(<Bootstrap />);   


