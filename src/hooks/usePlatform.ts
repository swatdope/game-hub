import { useQuery } from "@tanstack/react-query";
import { FetchRresponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchRresponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
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
