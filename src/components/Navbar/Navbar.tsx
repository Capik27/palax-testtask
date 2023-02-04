import style from "./Navbar.module.scss";

const Line = () => <div className={style.line} />;
const Item = ({ children, href }: any) => {
	return (
		<div className={style.item}>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	);
};

export const Navbar = ({ children }: any) => {
	return (
		<div className={style.main}>
			{children.map((child: any, index: number) => {
				return index != children.length - 1 ? (
					<>
						{child}
						<Line />
					</>
				) : (
					child
				);
			})}
		</div>
	);
};

// const xx = (
// 	<>
// 		<a href="/">Shop</a>
// 		<a href="/">Discover</a>
// 		<a href="/" className={style.bigtext}>
// 			C O M P A N Y
// 		</a>
// 		<Search />
// 		<Cart />
// 		<img src={facebook} alt="facebook" className={style.icon} />
// 		<img src={instagram} alt="insta" className={style.icon} />
// 		<img src={heart} alt="heart" className={style.icon_heart} />
// 		<ThemeChanger />
// 	</>
// );
