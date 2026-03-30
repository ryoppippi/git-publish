declare module 'byte-size' {
	type ByteSizeResult = {
		value: string;
		unit: string;
		long: string;
		toString(): string;
	};

	export default function byteSize(bytes: number): ByteSizeResult;
}
