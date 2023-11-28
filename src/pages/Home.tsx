import { Outlet } from '@tanstack/router';
import type { FunctionComponent } from '../common/types';

const Home = (): FunctionComponent => {
	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<p className="text-white text-6xl">Hello, world!</p>

			<div>
				show login container here
				<br />
				<Outlet />
			</div>
		</div>
	);
};

export default Home;
