import { Route } from '@tanstack/router';
import { rootRoute } from './RootRoute';
import AuthPage from '../pages/AuthPage';

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: '/',
	component: AuthPage,
});
