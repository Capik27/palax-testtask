import add from "assets/add.png";
import style from "./Buttons.module.scss";
import { useStore } from "hooks/useStore";

export const AddButton = ({ itemName }: any) => {
	const { dispatch }: any = useStore();

	const handleAddItem = () => {
		dispatch({ type: "ADD_ITEM", payload: itemName });
	};

	const handleAddCount = () => {
		dispatch({ type: "ADD_COUNT", payload: itemName });
	};

	return (
		<div className={style.add_btn}>
			<button className={style.add_btn} onClick={handleAddItem}>
				Add to Cart
			</button>
			<div className={style.add_count} onClick={handleAddCount}>
				<img src={add} data-add alt="add_count" />
			</div>
		</div>
	);
};
