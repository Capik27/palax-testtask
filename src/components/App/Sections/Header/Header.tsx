import style from "./Header.module.scss";
import { Cart } from "components/Cart";
import { Navbar } from "components/Navbar";
import { Search } from "components/Search";
import { ThemeChanger } from "components/ThemeChanger";
import facebook from "assets/facebook.png";
import instagram from "assets/instagram.png";
import heart from "assets/heart.png";

export const Header = () => {
	return (
		<header>
			<Navbar>
				<div className={style.item_default}>
					<a href="/">Shop</a>
				</div>
				<div className={style.item_default}>
					<a href="/">Discover</a>
				</div>
				<div className={style.item_company}>
					<a href="/" className={style.bigtext}>
						C O M P A N Y
					</a>
				</div>
				<div className={style.item_search}>
					<Search />
				</div>
				<div className={style.item_default}>
					<Cart />
				</div>
				<div className={style.item_icon}>
					<a href="/">
						<img src={facebook} alt="facebook" className={style.icon} />
					</a>
				</div>
				<div className={style.item_icon}>
					<a href="/">
						<img src={instagram} alt="insta" className={style.icon} />
					</a>
				</div>
				<div className={style.item_icon}>
					<a href="/">
						<img src={heart} alt="heart" className={style.icon_heart} />
					</a>
				</div>
				<div className={style.item_icon}>
					<ThemeChanger />
				</div>
			</Navbar>
		</header>
	);
};
