import { blue } from '@radix-ui/colors';

const ViteColors: React.FC = () => {
	return (
		<div className="grid grid-cols-3 gap-8">
			<div
				className="h-24 grid content-center"
				style={{ backgroundColor: blue.blue6 }}
			>
				<p className="text-white text-center font-medium ">Blue 6</p>
			</div>
			<div
				className="h-24 grid content-center"
				style={{ backgroundColor: blue.blue10 }}
			>
				<p className="text-white text-center font-medium">Blue 10</p>
			</div>
			<div
				className="h-24 grid content-center"
				style={{ backgroundColor: blue.blue12 }}
			>
				<p className="text-white text-center font-medium">Blue 12</p>
			</div>
		</div>
	);
};

export { ViteColors };
