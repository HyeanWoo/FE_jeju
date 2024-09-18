export const fetchSummary = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/summary/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchSummaries = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/summaryList`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchContents = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contents`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};

export const fetchContentsBySummaryId = async (summaryId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/summary/${summaryId}/contents`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("network problem is occurred.");
  }

  return response.json();
};
