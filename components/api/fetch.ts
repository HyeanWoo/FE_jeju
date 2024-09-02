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

export const fetchSummary = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/summary/${id}`,
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchSummaries = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/summaryList`,
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchContents = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contents`);

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchContentsBySummaryId = async (summaryId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/summary/${summaryId}/contents`,
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};
