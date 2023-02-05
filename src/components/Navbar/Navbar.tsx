import style from "./Navbar.module.scss";

export const Navbar = ({ children }: any) => {
	return <div className={style.main}>{children}</div>;
};
