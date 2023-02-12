import arrow from "assets/arrowdown.png";
import style from "./Buttons.module.scss";
import { BaseSyntheticEvent, useState } from "react";

interface TabButtonProps {
	first: number;
	options: Array<string>;
}

export const TabButton = ({ first, options }: TabButtonProps) => {
	const [value, setValue] = useState(
		options[first > options.length ? 0 : first]
	);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	const handleChangeVal = (e: BaseSyntheticEvent) => {
		setValue(e.target.value);
		setIsOpen(false);
	};

	return (
		<div
			className={isOpen ? style.tabbtn_active : style.tabbtn}
			onClick={handleClick}
		>
			<button className={style.tabbtn_text}>{value}</button>
			<div className={style.tabbtn_arrow}>
				<img src={arrow} alt="tabopen" />
			</div>
			{isOpen && (
				<div
					data-option
					className={style.tabbtn_options}
					onClick={(e) => e.stopPropagation()}
				>
					{options.map((opt) => {
						if (opt != value)
							return (
								<button
									key={opt}
									value={opt}
									className={style.tabbtn_options_btn}
									onClick={handleChangeVal}
								>
									{opt}
								</button>
							);
					})}
				</div>
			)}
		</div>
	);
};
