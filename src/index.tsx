import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { ThemeProvider } from "./providers/ThemeProvider";
import { StoreProvider } from "providers/StoreProvider";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ThemeProvider>
		<StoreProvider>
			<App />
		</StoreProvider>
	</ThemeProvider>
);
