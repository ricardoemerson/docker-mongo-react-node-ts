import React, {
	useContext,
	createContext,
	useCallback,
	useState,
	useEffect,
} from 'react';

import * as auth from '~/services/authentication';
import IUser from '~/services/IUser';
import IAuth from './IAuth';
import IAuthContext from './IAuthContext';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedAuth = localStorage.getItem('R:auth');

		if (storedAuth) {
			const parseAuth: IAuth = JSON.parse(storedAuth);

			if (parseAuth.authenticated) {
				setUser(parseAuth.user);
			}
		}

		setLoading(false);
	}, []);

	const signIn = useCallback(async (email: string, password: string) => {
		const response = await auth.signIn(email, password);

		if (response.authenticated) {
			localStorage.setItem('R:auth', JSON.stringify(response));

			setUser(response.user);
		}
	}, []);

	const signOut = useCallback(() => {
		setUser(null);
		localStorage.clear();
	}, []);

	return (
		<AuthContext.Provider value={{ loading, user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export default AuthProvider;
