export class LoginServices {
	public execute = (): IResponseServices => {
		return {
			name: 'marcos',
			age: 25,
		};
	};
}
export type IResponseServices = {
	name: string;
	age: number;
};
