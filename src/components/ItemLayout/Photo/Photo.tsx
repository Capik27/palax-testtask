import style from "./Photo.module.scss";
import { View } from "./View";

export const Photo = (props: any) => {
	const images = props.images;
	return (
		<div className={style.main}>
			<View images={images} />
			<div className={style.single}>
				<img
					src={images[0]}
					className={style.image}
					data-img
					alt="item_image"
				/>
			</div>
		</div>
	);
};
