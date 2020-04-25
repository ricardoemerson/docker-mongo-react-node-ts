import IUser from '~/services/IUser';

export default interface IAuthContext {
	loading: boolean;
	user: IUser | null;
	signIn(email: string, password: string): void;
	signOut(): void;
}
