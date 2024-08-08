export const getHealthCheck = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/HealthCheck`,
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response;
};
