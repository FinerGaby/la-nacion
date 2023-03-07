export default async function handler(_req, res) {
  try {
    const fetching = await fetch(
      "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws",
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await fetching.json();
    res.json(data?.articles);
  } catch (e) {
    return {
      error: e,
    };
  }
}
