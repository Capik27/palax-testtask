import React, { SyntheticEvent, useRef, useState } from "react";
import style from "./Search.module.scss";
//
import search from "assets/search.png";

export const Search = () => {
	const [memory, setMemory] = useState([]);
	const [pressed, setPressed] = useState(false);
	const inputRef: any = useRef();
	console.log("serch");

	const handleClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		console.log("clicked");
		setPressed((prev) => !prev);
		inputRef.current.focus();
	};

	return (
		<div
			className={pressed ? style.main_active : style.main}
			onClick={handleClick}
		>
			<img src={search} />
			<input placeholder="Search" ref={inputRef} />
		</div>
	);
};
