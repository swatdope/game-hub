import axios from "axios";

export interface FetchRresponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21d7c8999a7d4e05927032ecd427b621",
  },
});
