import { createContext, useState } from "react";

export const ThemeCtx = createContext({});

export const ThemeProvider = ({ children }: any) => {
	const [type, setType] = useState<boolean>(false); // isDark?

	return (
		<ThemeCtx.Provider value={{ type, setType }}>{children}</ThemeCtx.Provider>
	);
};
