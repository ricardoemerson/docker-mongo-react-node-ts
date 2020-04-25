import IAuth from '~/contexts/IAuth';

export async function signIn(email: string, password: string): Promise<IAuth> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === 'lucasgdbittencourt@gmail.com' && password === 'test') {
				return resolve({
					authenticated: true,
					accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
					user: {
						email: 'lucasgdbittencourt@gmail.com',
						name: 'Lucas Bittencourt',
					},
				});
			} else {
				return reject({
					authenticated: false,
					accessToken: null,
					user: null,
				});
			}
		}, 2000);
	});
}
