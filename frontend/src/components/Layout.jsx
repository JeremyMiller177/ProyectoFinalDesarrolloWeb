import { AppShell, Header, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <ul style={{ display: "flex", gap: 16, listStyle: "none" }}>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/heroes" style={{ textDecoration: "none" }}>
                  Héroes
                </Link>
              </li>
              <li>
                <Link to="/acerca-de" style={{ textDecoration: "none" }}>
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
