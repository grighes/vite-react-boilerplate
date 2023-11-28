import { createContext, useContext, useEffect, useState } from 'react';
import type { UserEntity } from '../domain/user.entity';
import type { LoginPayload } from '../domain/login.entity';

type AuthContextType = {
	isAuthenticated: boolean;
	user: UserEntity | null;
	login: ({ email, password }: LoginPayload) => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<UserEntity | null>(null);

	const login = async ({ email, password }: LoginPayload) => {
		console.log('login', email, password);
	};

	const logout = async () => {
		console.log('logout');
	};

	useEffect(() => {
		console.log('useEffect');
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				login,
				logout,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuthContext must be used within a AuthProvider');
	}
	return context;
};
