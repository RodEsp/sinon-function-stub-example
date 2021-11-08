import stubableFunction from "./stubee";

export default class main {

	async run(arg1: string, arg2: string): Promise<any> {
		const result = await stubableFunction(arg1, arg2);
		console.log(result);

		return result;
	}
}
