import { useState } from 'react';
import Button from './Button';

const View = () => {
	const [amount, setAmount] = useState(0);
	return <Button amount={amount} setAmount={setAmount} />;
};
export default View;
