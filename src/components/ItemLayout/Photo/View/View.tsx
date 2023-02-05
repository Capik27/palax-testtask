import { useState } from "react";
import style from "./View.module.scss";

export const View = (props: any) => {
	const [full, setFull] = useState(false);
	const images = props.images;

	const handleClick = (e: any) => {
		e.preventDefault();
		setFull(true);
	};

	return (
		<div className={style.view}>
			{full &&
				images.map((img: string, ind: number) => (
					<div className={style.mini} key={ind}>
						<img src={img} className={style.image} data-img alt="item_image" />
					</div>
				))}

			{!full && (
				<>
					<div className={style.mini}>
						<img
							src={images[0]}
							className={style.image}
							data-img
							alt="item_image"
						/>
					</div>
					<a href={"/"} onClick={handleClick}>
						View
					</a>
				</>
			)}
		</div>
	);
};
