export const getHeroes = async () => {
  try {
    const response = await fetch("http://localhost:3001/heroes");
    const data = await response.json();

    return data.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los héroes");
  }
};

export const getHeroe = async (id) => {
  if (!id) return;

  try {
    const response = await fetch(`http://localhost:3001/heroes/${id}`);
    const data = await response.json();

    return data.data.results[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el héroe");
  }
};

export const getComics = async (id) => {
  if (!id) return;

  try {
    const response = await fetch(`http://localhost:3001/heroes/${id}/comics`);
    const data = await response.json();

    return data.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el héroe");
  }
};

export const getSeries = async (id) => {
  if (!id) return;

  try {
    const response = await fetch(`http://localhost:3001/heroes/${id}/series`);
    const data = await response.json();

    return data.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el héroe");
  }
};
