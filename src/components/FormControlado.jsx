import { useState } from 'react';

const FormControlado = () => {
	const [form, setForm] = useState({ email: '', password: '123' });

	const handlerInput = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handlerInputDestructuring = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	return (
		<form>
			<input
				type='text'
				name='email'
				placeholder='Ingrese su Email'
				autoComplete='off'
				value={form.email}
				onChange={handlerInput}
			></input>
			<input
				type='password'
				name='password'
				placeholder='Ingrese su password'
				autoComplete='off'
				value={form.password}
				onChange={handlerInputDestructuring}
			></input>
			<button>Login</button>
			<br />
			<span>Email:{form.email}</span>
			<br />
			<span>Password:{form.password}</span>
		</form>
	);
};
export default FormControlado;
