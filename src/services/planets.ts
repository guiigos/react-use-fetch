import IFetchGateway from "../modules/gateways/IFetchGateway";

const PATH = "/api/planets";

class PlanetService {
	static getAll = (fn: IFetchGateway, params?: URLSearchParams): Promise<Swapi.Response<Swapi.Planets>> =>
    fn.get(PATH, params);
}

export default PlanetService;
