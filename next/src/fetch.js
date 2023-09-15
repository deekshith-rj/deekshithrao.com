export const fetchRemoteData = async (path, fallback) => {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
    return await resp.json();;
  } catch (err) {
    if (process.env.NEXT_PUBLIC_ALLOW_FALLBACK === "true") {
      return fallback;
    } else {
      throw err;
    }
  }
}