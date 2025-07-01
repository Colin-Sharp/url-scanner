// server/api/virustotal/analysis.get.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { id } = getQuery(event);

   // Validate analysis ID
   if (!id || typeof id !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Analysis ID is required and must be a string'
    })
  }

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Analysis ID is required",
    });
  }

  try {
    const response = await $fetch(`${config?.public?.baseUrl}/analyses/${id}`, {
      headers: {
        "x-apikey": config?.apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return response;
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: "Failed to retrieve analysis results",
      data: error.data,
    });
  }
});
