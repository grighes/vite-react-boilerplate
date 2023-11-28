import { Button } from '@radix-ui/themes';

interface ButtonProps {
	children?: React.ReactNode;
	onClick: () => void;
	label?: string;
	disabled?: boolean;
	size: '1' | '2' | '3' | '4';
	variant: 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
	color?:
		| 'tomato'
		| 'red'
		| 'ruby'
		| 'crimson'
		| 'pink'
		| 'plum'
		| 'purple'
		| 'violet'
		| 'iris'
		| 'indigo'
		| 'blue'
		| 'cyan'
		| 'teal'
		| 'jade'
		| 'green'
		| 'grass'
		| 'brown'
		| 'orange'
		| 'sky'
		| 'mint'
		| 'lime'
		| 'yellow'
		| 'amber'
		| 'gold'
		| 'bronze'
		| 'gray';
	highContrast?: boolean;
	radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

const ViteButton: React.FC<ButtonProps> = ({
	children,
	label = 'Default Label',
	onClick,
	disabled,
	size = '1',
	variant = 'soft',
	color = 'blue',
	highContrast = false,
	radius = 'medium',
}) => {
	return (
		<Button
			size={size}
			variant={variant}
			onClick={onClick}
			disabled={disabled}
			color={color}
			highContrast={highContrast}
			radius={radius}
		>
			{children ?? label}
		</Button>
	);
};

export { ViteButton };
