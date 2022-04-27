export interface Logotip {
  description: null | string;
  height: number;
  title: string;
  url: string;
  width: number;
}

export interface Sponzorji {
  naslov?: string;
  logotipi: Logotip[];
}

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

const parseSponzorji = (fetchResponse): Sponzorji => {
  const logotipi = fetchResponse?.data?.sponzorji?.logotipiCollection?.items;
  const naslov = fetchResponse?.data?.sponzorji?.naslov;

  return {
    logotipi: logotipi.reverse() || [],
    naslov,
  };
};

export async function getSponzorji(preview = false) {
  const entries = await fetchGraphQL(
    `query PonudbaQuery {
        sponzorji(preview: ${preview}, id: "3GIVhMQlxkRFnqyOLQVcqG") {
          naslov
          logotipiCollection {
            items {
              title
              description
              width
              height
              url
            }
          }
        }
      }`,
    preview
  );
  const sponzorji = parseSponzorji(entries);
  return sponzorji;
}
