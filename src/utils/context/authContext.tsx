import {
	useState,
	createContext,
	useContext,
	useCallback,
	useEffect,
	FunctionComponent,
	PropsWithChildren
} from 'react';

import { client } from '@utils/common';

import { User } from '@typings';

type AuthContextType = {
	isLoading: boolean;
	isLoggedIn: boolean;
	user: Omit<User, 'lists'> | null;
	fetchUser: () => void;
};

type AuthState = Pick<AuthContextType, 'isLoading' | 'isLoggedIn' | 'user'>;

const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = 'AuthContext';

export const AuthProvider: FunctionComponent<PropsWithChildren<{}>> = props => {
	const [session, setSession] = useState<AuthState>({
		isLoading: false,
		isLoggedIn: false,
		user: null
	});

	useEffect(() => {
		setSession(session => ({ ...session, isLoading: true }));

		fetchUser();

		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);

	const fetchUser = useCallback(async () => {
		return client<User>('/user/me', {
			withCredentials: true
		})
			.then(response => {
				setSession({
					isLoading: false,
					isLoggedIn: !!response.data,
					user: response.data
				});
			})
			.catch(() => {
				setSession(session => ({ ...session, isLoading: false }));
			});
		/* eslint-disable-next-line react-hooks/exhaustive-deps*/
	}, []);

	const value = {
		...session,
		fetchUser
	};

	return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used in <AuthProvider />');
	}

	return context;
};
