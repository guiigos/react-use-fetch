import axios, {
  AxiosInstance,
  AxiosResponse,
} from "axios";
import IFetchGateway from "../gateways/IFetchGateway";

class AxiosAdapter implements IFetchGateway {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API,
    });

    this.api.interceptors.response.use((response: AxiosResponse<any, any>) => {
      const { data } = response;

      const paramsPrevious = !!data?.previous ? new URL(data?.previous).searchParams : undefined;
      const paramsNext = !!data?.next ? new URL(data?.next).searchParams : undefined;

      return Promise.resolve({
        ...data,
        paramsPrevious,
        paramsNext,
      });
    });
  }

  async get(path: string, params?: URLSearchParams): Promise<any> {
    return this.api.get(`${path}${!!params ? "?" + params?.toString() : ""}`);
  }
}

export default AxiosAdapter;
