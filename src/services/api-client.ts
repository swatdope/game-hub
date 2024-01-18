import axios, { AxiosRequestConfig } from "axios";

export interface FetchRresponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21d7c8999a7d4e05927032ecd427b621",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchRresponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
