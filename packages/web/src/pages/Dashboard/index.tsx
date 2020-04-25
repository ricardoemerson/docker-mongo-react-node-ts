import React from 'react';

import Unauthenticated from '~/pages/Unauthenticated';
import { useAuth } from '~/contexts/auth.context';

export default function SignIn() {
	const { user, signOut } = useAuth();

	function handleSignOut() {
		signOut();
	}

	if (!user) {
		return <Unauthenticated />;
	}

	return (
		<div>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
}
