export default async function stubableFunction(arg1: string, arg2: string) {
	if (!!arg1 && !!arg2) {
		return Promise.resolve(`You just called the stubable function with ${arg1} and ${arg2}`);
	}

	return Promise.reject('The stubable function did not receive any arguments');
}