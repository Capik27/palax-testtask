import "./App.scss";
import { useTheme } from "hooks/useTheme";
import { Header } from "./Sections/Header";
import { Footer } from "./Sections/Footer";
import { Main } from "./Sections/Main";

export default function App() {
	const { type }: any = useTheme();
	console.log("app", type);
	return (
		<div className={type ? "app-dark" : "app"}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
