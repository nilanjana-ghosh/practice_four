import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./containers/Header";
import Body from "./containers/Body"

const App = () => {
    return (
        <StrictMode>
            <Header />
            <Body />
        </StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);