import React from 'react';
import { Container, Button } from '@material-ui/core';

import Header from '~/components/Header';

export default function SignUp() {
	return (
		<>
			<Header />

			<Container style={{ marginTop: 10 }}>
				<Button color="primary">Sign up</Button>
			</Container>
		</>
	);
}
