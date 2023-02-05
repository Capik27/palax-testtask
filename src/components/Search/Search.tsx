import {
	BaseSyntheticEvent,
	SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import style from "./Search.module.scss";
import search from "assets/search.png";

const MEMORY_LIMIT = 5;
const lastQueryes = ["Material", "Cart", "Delivery", "Profile", "blabla"];

export const Search = () => {
	const [memory, setMemory] = useState<Array<string>>([]);
	const [pressed, setPressed] = useState(false);
	const [value, setValue] = useState("");
	const inputRef: any = useRef();

	const handleClick = (e: SyntheticEvent) => {
		if (!pressed) {
			setPressed(true);
			inputRef.current.focus();
		}
	};

	const handleSubmit = useCallback(
		(e: SyntheticEvent) => {
			e.preventDefault();
			const val = value.trim();
			if (val && !memory.includes(val)) {
				if (memory.length === MEMORY_LIMIT) {
					setMemory([...[...memory].slice(1), value]);
				} else {
					setMemory([...memory, value]);
				}
				setValue("");
			}
		},
		[memory, value]
	);

	const handleChange = useCallback(
		(e: BaseSyntheticEvent) => setValue(e.target.value),
		[value]
	);

	const handleClose = (e: any) => {
		if (pressed) {
			if (!e.target.dataset.search || e.code === "Escape") {
				setPressed(false);
				setValue("");
				document.removeEventListener("click", handleClose);
				document.removeEventListener("keyup", handleClose);
				inputRef.current.blur();
			}
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClose);
		document.addEventListener("keyup", handleClose);
	}, [pressed]);

	return (
		<>
			{pressed && memory.length > 0 && (
				<div
					className={style.field_bg}
					data-search
					data-dark
					style={{
						height: `calc(87px + (${memory.length} * 24px) + ((${memory.length} - 1) * 16px))`,
					}}
				/>
			)}
			<div className={style.form_wrap}>
				<form
					data-search
					className={pressed ? style.main_active : style.main}
					onClick={handleClick}
					onSubmit={handleSubmit}
				>
					<img data-search src={search} />
					<input
						data-search
						placeholder="Search"
						onChange={handleChange}
						value={value}
						ref={inputRef}
					/>
				</form>
				{pressed && memory.length > 0 && (
					<div
						data-search
						data-dark
						className={style.field}
						onClick={(e) => e.stopPropagation()}
					>
						{memory.map((query, ind) => (
							<a
								data-search
								key={ind}
								style={{ cursor: "pointer" }}
								onClick={() => {
									inputRef.current.focus();
									setValue(query);
								}}
							>
								{query}
							</a>
						))}
					</div>
				)}
			</div>
		</>
	);
};
