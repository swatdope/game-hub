import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platform/list/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatform;

// import platforms from "../data/platforms";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// export default usePlatforms;
