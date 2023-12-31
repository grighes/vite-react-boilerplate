import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/router';
import type { FunctionComponent } from './common/types';
import { TanStackRouterDevelopmentTools } from './components/utils/development-tools/TanStackRouterDevelopmentTools';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext.tsx';

const queryClient = new QueryClient();

const App = (): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<RouterProvider router={router} />
				<TanStackRouterDevelopmentTools
					router={router}
					initialIsOpen={false}
					position="bottom-right"
				/>
				<ReactQueryDevtools initialIsOpen={false} />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
