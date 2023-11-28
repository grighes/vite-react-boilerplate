import { Route } from '@tanstack/router';
import { rootRoute } from './RootRoute';
import AuthPage from '../pages/AuthPage';
import { LoginForm } from '../features/authentication/components/LoginForm';

export const AuthRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	id: 'auth',
	component: AuthPage,
});

export const BaseLoginRoute = new Route({
	getParentRoute: (): typeof AuthRoute => AuthRoute,
	id: 'base-login',
	path: '/',
	component: LoginForm,
});

export const LoginRoute = new Route({
	getParentRoute: (): typeof AuthRoute => AuthRoute,
	id: 'login',
	path: 'login',
	component: LoginForm,
});

export const ForgotPasswordRoute = new Route({
	getParentRoute: (): typeof AuthRoute => AuthRoute,
	id: 'forgot-password',
	path: 'forgot-password',
	component: (): JSX.Element => {
		return (
			<div>
				<p className="text-white text-1xl">Forgot password</p>
			</div>
		);
	},
});
