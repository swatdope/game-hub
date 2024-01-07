import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useData<Platform>('/platforms/lists/parents')

export default usePlatform 

// import platforms from "../data/platforms";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// export default usePlatforms;
