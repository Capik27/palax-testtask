import React from "react";
import style from "./Cart.module.scss";

export const Cart = () => {
	return (
		<a href={"/"} className={style.main}>
			<p>Cart</p>
			<div className={style.badge}>
				<span>{"2"}</span>
			</div>
		</a>
	);
};
