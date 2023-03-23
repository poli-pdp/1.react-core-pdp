const Button = ({ amount, setAmount }) => {
	return (
		<button
			onClick={() => {
				setAmount(amount + 1);
			}}
		>
			Views: {amount}
		</button>
	);
};

export default Button;
