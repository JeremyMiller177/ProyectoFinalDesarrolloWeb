import {
  Badge,
  Card,
  Flex,
  Group,
  MantineProvider,
  Title,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { Heroes } from "./pages/Heroes";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Heroe } from "./pages/Heroe";

const Inicio = () => (
  <div>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title mb={16} order={3}>
        Integrantes
      </Title>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Badge color="blue" variant="filled">
          Jeremy Saúl Rodríguez García / 1790-20-20725 / Desarrollo Web
        </Badge>
        <Badge color="cyan" variant="filled">
          Rudy Isaías Morán Gómez / 1790-20-3374 / Desarrollo Web
        </Badge>
        <Badge color="green" variant="filled">
          Jelsin Jair Saenz Castañeda / 1790-20-6022 / Desarrollo Web
        </Badge>
        <Badge color="orange" variant="filled">
          Jaqueline Maydelí Godoy Morataya  / 1790-20-20265 / Desarrollo Web
        </Badge>
        <Badge color="dark" variant="filled">
          Diego Alejandro Castro Ramírez / 1790-20-20986 / Desarrollo Web
        </Badge>
        <Badge color="grape" variant="filled">
          Edras Rafael Monterroso Flores / 1790-20-10568 / Desarrollo Web
        </Badge>
        <Badge color="yellow" variant="filled">
          Carlos Alejandro Rodríguez Díaz / 1790-20-18990 / Desarrollo Web
        </Badge>
      </div>
    </Card>
  </div>
);

const AcercaDe = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Title order={1}>Tecnologías utilizadas</Title>

    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>Backend</Title>

      <Group mt="md" mb="xs">
        <Badge color="lime" variant="filled">
          NodeJS
        </Badge>
        <Badge color="lime" variant="filled">
          Express
        </Badge>
      </Group>
    </Card>

    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>Frontend</Title>

      <Group mt="md" mb="xs">
        <Badge color="blue" variant="filled">
          ReactJS
        </Badge>
        <Badge color="blue" variant="filled">
          Mantine
        </Badge>
      </Group>
    </Card>
  </div>
);

function App() {
  const theme = useColorScheme();

  return (
    <MantineProvider
      theme={{ colorScheme: theme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="flex-start"
            direction="row"
            wrap="wrap"
            w={1200}
          >
            <Routes>
              <Route path="/" element={<Inicio />} />

              <Route path="heroes" element={<Heroes />} />

              <Route path="heroes/:id" element={<Heroe />} />

              <Route path="acerca-de" element={<AcercaDe />} />

              <Route path="*" element={<Heroes />} />
            </Routes>
          </Flex>
        </div>
      </Layout>
    </MantineProvider>
  );
}

export default App;
