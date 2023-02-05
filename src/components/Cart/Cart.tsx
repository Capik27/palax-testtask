import { useStore } from "hooks/useStore";
import React from "react";
import style from "./Cart.module.scss";

export const Cart = () => {
	const { state }: any = useStore();
	const total = state.total;

	return (
		<a href={"/"} className={style.main}>
			<p>Cart</p>
			<div className={style.badge}>
				<span>{total}</span>
			</div>
		</a>
	);
};
