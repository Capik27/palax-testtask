import style from "./Footer.module.scss";
import { Navbar } from "components/Navbar";

export const Footer = () => {
	return (
		<footer>
			<Navbar>
				<div className={style.item} style={{ backgroundColor: "#000" }}>
					<a href="/" style={{ color: "#fff" }}>
						Cart
					</a>
				</div>
				<div className={style.item}>
					<a href="/">Overview</a>
				</div>
				<div className={style.item}>
					<a href="/">Boutique</a>
				</div>
				<div className={style.item}>
					<a href="/">About Us</a>
				</div>
				<div className={style.item}>
					<a href="/">FAQ</a>
				</div>

				<div className={style.last}>
					<a href="/">ITEM SECTION NAME</a>
				</div>
			</Navbar>
		</footer>
	);
};
