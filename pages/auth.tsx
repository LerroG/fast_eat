import { useState } from 'react';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import { Button } from '@/components/ui/button';

const buttonType = [
	{ name: 'Login', buttonValue: 1 },
	{ name: 'Register', buttonValue: 2 },
];

const AuthPage = () => {
	const [value, setValue] = useState(1);

	return (
		<div className='w-full h-dvh flex items-center'>
			<div className='flex flex-col m-auto items-center justify-between pb-14 border-solid border-2 border-slate-300 shadow-md rounded-lg w-3/4 md:w-1/2 lg:w-2/6'>
				<div className='mb-12'>
					{buttonType.map(({ name, buttonValue }) => (
						<Button
							variant='ghost'
							size='lg'
							className={`hover:bg-gray-200 rounded-t-lg rounded-b-none hover:text-black text-lg w-1/2 ${
								value === buttonValue ? 'border-b-2 border-primary' : ''
							}`}
							onClick={() => {
								setValue(buttonValue);
							}}
							key={buttonValue}
						>
							{name}
						</Button>
					))}
				</div>
				{value === 1 ? <Login /> : <Register />}
			</div>
		</div>
	);
};

export default AuthPage;
