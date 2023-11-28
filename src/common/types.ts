export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export type SingleResponseAttribute<T> = {
	data: T;
};

export type ListResponseAttribute<T> = SingleResponseAttribute<Array<T>>;

export type InfiniteResponseAttribute<T> = ListResponseAttribute<T> & {
	pagination: {
		count: number;
		limit: number;
		page: number;
	};
};
