import usePlatform from "./usePlatform";

const platform = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};
export default platform;
