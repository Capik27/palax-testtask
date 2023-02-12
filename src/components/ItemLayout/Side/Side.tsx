import { AddButton } from "components/Buttons/AddButton";
import { TabButton } from "components/Buttons/TabButton";
import style from "./Side.module.scss";

export const Side = (props: any) => {
	return (
		<div className={style.wrap}>
			<div className={style.main}>
				<div>
					<p className={style.text}>{props.name}</p>
					<p className={style.text}>${props.price}</p>
				</div>
				<button className={style.button}>Personalise</button>
				<AddButton itemName={props.name} />
				<div style={{ marginBottom: 70 }}>
					<p className={style.text}>
						*Free delivery on all orders over USD $50
					</p>
					<p className={style.text}>*Check availability in boutiques</p>
				</div>
				<TabButton
					first={0}
					options={["Material", "Steel", "Plastic", "Tree"]}
				/>
				<TabButton
					first={3}
					options={["test1", "test2", "test3", "test4", "test5"]}
				/>
			</div>
		</div>
	);
};
