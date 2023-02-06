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
				<div className={style.item_default} data-line>
					<a href="/">Shop</a>
				</div>
				<div className={style.item_default} data-line>
					<a href="/">Discover</a>
				</div>
				<div className={style.item_company} data-line>
					<a href="/" className={style.bigtext}>
						C O M P A N Y
					</a>
				</div>
				<div className={style.item_search} data-line>
					<Search />
				</div>
				<div className={style.item_default} data-line>
					<Cart />
				</div>
				<div className={style.item_icon} data-line>
					<a href="/">
						<img
							src={facebook}
							data-icon
							alt="facebook"
							className={style.icon}
						/>
					</a>
				</div>
				<div className={style.item_icon} data-line>
					<a href="/">
						<img src={instagram} data-icon alt="insta" className={style.icon} />
					</a>
				</div>
				<div className={style.item_icon} data-line>
					<a href="/">
						<img
							src={heart}
							data-icon
							alt="heart"
							className={style.icon_heart}
						/>
					</a>
				</div>
				<div className={style.item_last}>
					<ThemeChanger />
				</div>
			</Navbar>
		</header>
	);
};
