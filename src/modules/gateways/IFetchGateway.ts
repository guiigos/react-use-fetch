interface IFetchGateway {
	get(path: string, params?: URLSearchParams): Promise<any>;
}

export default IFetchGateway;
