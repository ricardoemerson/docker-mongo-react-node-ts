import IUser from '../services/IUser';

export default interface IAuth {
	authenticated: boolean;
	accessToken: string;
	user: IUser;
}
