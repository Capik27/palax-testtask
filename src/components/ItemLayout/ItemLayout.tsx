import style from "./ItemLayout.module.scss";
import { Photo } from "./Photo";
import { Side } from "./Side";

const param = {
	name: "ITEM_NAME",
	price: "500.99",
	img: [
		"https://ir.ozone.ru/s3/multimedia-i/c1000/6132376446.jpg",
		"https://avatars.mds.yandex.net/get-mpic/5378193/img_id260658027956988825.jpeg/600x800",
		"https://ir.ozone.ru/s3/multimedia-i/c1000/6132376446.jpg",
		"https://avatars.mds.yandex.net/get-mpic/5378193/img_id260658027956988825.jpeg/600x800",
	],
};

export const ItemLayout = (props: any) => {
	return (
		<div className={style.main}>
			<Photo images={param.img} />
			<Side {...param} />
		</div>
	);
};
