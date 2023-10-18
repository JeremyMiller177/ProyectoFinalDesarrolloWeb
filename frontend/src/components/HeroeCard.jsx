import {
  Badge,
  Button,
  Group,
  Image,
  Text,
  Card as UICard,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const HeroeCard = ({ imgSrc, title, description, navigateTo }) => {
  const handleCardHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <UICard
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        transform: "scale(1)",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseOver={handleCardHover}
      onMouseOut={handleCardLeave}
    >
      <UICard.Section>
        <Image height={350} src={imgSrc} alt={imgSrc} />
      </UICard.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="blue" variant="filled">
          Heroe
        </Badge>
      </Group>

      <Link to={navigateTo} style={{ textDecoration: "none" }}>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Ver héroe
        </Button>
      </Link>
    </UICard>
  );
};
