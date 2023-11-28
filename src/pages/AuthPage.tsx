import { Outlet } from '@tanstack/router';
import type { FunctionComponent } from '../common/types';

const AuthPage = (): FunctionComponent => {
	return (
		<div className="bg-blue-500 w-screen h-screen flex flex-col justify-center items-center ">
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthPage;
