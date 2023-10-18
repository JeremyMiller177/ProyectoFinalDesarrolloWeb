import { getComics, getHeroe, getSeries } from "../api/heroes";
import { useParams } from "react-router-dom";
import {
  Badge,
  Card,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";

export const Heroe = () => {
  const { id } = useParams();

  const [heroe, setHeroe] = useState();
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getHeroe(id).then((res) => {
      setHeroe(res);
    });

    getComics(id).then((res) => {
      setComics(res);
    });

    getSeries(id).then((res) => {
      setSeries(res);
    });
  }, [id]);

  if (!heroe) return null;

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Image
          alt={`${heroe.thumbnail?.path}/detail.${heroe.thumbnail?.extension}`}
          src={`${heroe.thumbnail?.path}/detail.${heroe.thumbnail?.extension}`}
          height={350}
          width={350}
          radius="xl"
        />

        <Title order={1}>{heroe.name}</Title>

        <Text size="sm" color="dimmed">
          {heroe.description || "No description available"}
        </Text>
      </div>

      <Divider size="lg" />

      <Title order={2}>Comics</Title>

      <SimpleGrid cols={3} spacing="xl">
        {comics?.map((comic) => (
          <Card
            key={comic.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <Card.Section>
              <Image
                height={250}
                alt={`${comic.thumbnail?.path}/detail.${comic.thumbnail?.extension}`}
                src={`${comic.thumbnail?.path}/detail.${comic.thumbnail?.extension}`}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{comic.title}</Text>
              <Badge color="green" variant="filled">
                Cómic
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {comic?.description?.slice(0, 150).concat("...") ||
                "No description available"}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      <Divider size="lg" />

      <Title order={2}>Series</Title>

      <SimpleGrid cols={3} spacing="xl">
        {series?.map((serie) => (
          <Card
            key={serie.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <Card.Section>
              <Image
                height={250}
                alt={`${serie.thumbnail?.path}/detail.${serie.thumbnail?.extension}`}
                src={`${serie.thumbnail?.path}/detail.${serie.thumbnail?.extension}`}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{serie.title}</Text>
              <Badge color="yellow" variant="filled">
                Serie
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {serie.description?.slice(0, 150).concat("...") ||
                "No description available"}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
};
