import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import platform from "../hooks/platform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platforms = platform(gameQuery.platformId);

  const heading = `${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
