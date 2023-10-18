import { getHeroes } from "../api/heroes";
import { HeroeCard } from "../components/HeroeCard";
import { Flex, SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes().then((res) => {
      setHeroes(res);
    });
  }, []);

  return (
    <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <SimpleGrid cols={3} spacing="xl">
        {heroes?.map((heroe) => (
          <HeroeCard
            key={heroe.id}
            imgSrc={`${heroe.thumbnail?.path}/detail.${heroe.thumbnail?.extension}`}
            title={heroe.name}
            description={heroe.description}
            navigateTo={`/heroes/${heroe.id}`}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
