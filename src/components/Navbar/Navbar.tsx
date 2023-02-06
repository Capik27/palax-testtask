import style from "./Navbar.module.scss";

export const Navbar = ({ children }: any) => {
	return (
		<div data-navbar className={style.main}>
			{children}
		</div>
	);
};
