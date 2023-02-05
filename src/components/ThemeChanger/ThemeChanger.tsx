import style from "components/App/Sections/Header/Header.module.scss";

import React, { SyntheticEvent } from "react";
//import style from "./ThemeChanger.module.scss";
//
import theme from "assets/theme.png";
import { useTheme } from "hooks/useTheme";

export const ThemeChanger = () => {
	const { type, setType }: any = useTheme();

	const handleChange = (e: SyntheticEvent) => {
		e.preventDefault();
		setType((prev: boolean) => !prev);
	};

	return (
		<a href="/" onClick={handleChange}>
			<img src={theme} alt="theme" className={style.icon} />
		</a>
	);
};
