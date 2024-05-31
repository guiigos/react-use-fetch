import IFetchGateway from "../gateways/IFetchGateway";

class FetchAdapter implements IFetchGateway {
  URL: string;

  constructor() {
    this.URL = import.meta.env.VITE_API;
  }

  async get(path: string, params?: URLSearchParams): Promise<any> {
    const response = await fetch(`${this.URL}${path}${!!params ? "?" + params?.toString() : ""}`, {
      method: "GET",
    });

    const result = await response.json();
    const paramsPrevious = !!result?.previous ? new URL(result?.previous).searchParams : undefined;
    const paramsNext = !!result?.next ? new URL(result?.next).searchParams : undefined;

    return Promise.resolve({
      ...result,
      paramsPrevious,
      paramsNext,
    });
  }
}

export default FetchAdapter;
