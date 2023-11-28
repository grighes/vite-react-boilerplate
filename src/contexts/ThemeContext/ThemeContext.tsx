import { Theme } from '@radix-ui/themes';

interface Props {
	children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	return (
		<Theme radius="small" accentColor="green">
			<>{children}</>
		</Theme>
	);
};
