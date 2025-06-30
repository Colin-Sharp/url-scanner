export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { url } = getQuery(event);

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  try {
    const scanResponse = await $fetch(`${config?.public?.baseUrl}/urls`, {
      method: "POST",
      body: new URLSearchParams({ url: url as string }).toString(),
      headers: {
        "x-apikey": config?.apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return scanResponse;
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
