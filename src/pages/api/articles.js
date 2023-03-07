import { API_URL } from "../../../config";

export default async function handler(_req, res) {
  try {
    const fetching = await fetch(API_URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await fetching.json();
    res.json(data?.articles);
  } catch (e) {
    return {
      error: e,
    };
  }
}
