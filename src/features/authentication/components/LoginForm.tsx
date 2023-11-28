import { useForm } from 'react-hook-form';
import type { FunctionComponent } from '../../../common/types';
import { ViteButton } from '../../../components/ui/Button';

type FormData = {
	email: string;
	password: string;
};

export const LoginForm = (): FunctionComponent => {
	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<div className="w-72 max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
			<h2 className="text-2xl font-semibold mb-6">Login</h2>
			<form onSubmit={onSubmit}>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-600"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register('email', { required: 'Email is required' })}
						className="mt-1 p-2 w-full border rounded-md"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-600"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						{...register('password', { required: 'Password is required' })}
						className="mt-1 p-2 w-full border rounded-md"
					/>
				</div>
				<div className="flex justify-between items-center">
					<ViteButton
						type="submit"
						size="3"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
					>
						Login
					</ViteButton>
					<a href="forgot-password" className="text-blue-500 hover:underline">
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	);
};
