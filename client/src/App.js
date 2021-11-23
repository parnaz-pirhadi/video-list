import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AllVideos} from "./components/Pages";

function App() {
    return (
            <BrowserRouter>
                <AllVideos />
            </BrowserRouter>
    );
}

export default App;
