import { Request, Response } from 'express';
import { IResponseServices, LoginServices } from '../services/LoginServices';

export class LoginControllers {
	constructor(private loginServices: LoginServices) {}
	public execute = (req: Request, res: Response): void => {
		try {
			const responseServices: IResponseServices = this.loginServices.execute();
			res.status(200).json(responseServices);
		} catch (error) {
			res.status(400).json({ error: (error as Error).message });
		}
	};
}
