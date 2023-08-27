import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AuthRoute = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [, setCookie] = useCookies(['userId']);

	useEffect(() => {
		setCookie('userId', searchParams.get('userId'), {
			httpOnly: true
		});

		navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
};

export default AuthRoute;
