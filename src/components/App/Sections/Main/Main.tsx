import { ItemLayout } from "components/ItemLayout";
import { useStore } from "hooks/useStore";
import style from "./Main.module.scss";

export const Main = () => {
	return (
		<main className={style.body}>
			<ItemLayout />
			{/* <div>{JSON.stringify(store)}</div>
			<button onClick={handleClick}>Add</button> */}
		</main>
	);
};
