import IApiGateway from "../modules/gateways/IFetchGateway";

const PATH = "/api/planets";

class PlanetService {
	static getAll = (fn: IApiGateway, params?: URLSearchParams): Promise<Swapi.Response<Swapi.Planets>> =>
    fn.get(PATH, params);
}

export default PlanetService;
