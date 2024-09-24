import { Position } from "./types";
import { KakaoTokenResponse, UserResponse } from "./types/type";

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

export const fetchTourContent = async (position: Position) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/recommendation?mapX=${position.lng}&mapY=${position.lat}`,
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

export const putKaKaoLogin = async (
  client_id: string,
  redirect_uri: string,
  code: string,
): Promise<KakaoTokenResponse> => {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id,
    redirect_uri,
    code,
  });

  try {
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: params.toString(),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error fetching token: ${errorData.error_description || response.statusText}`,
      );
    }

    const data: KakaoTokenResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error in putKaKaoLogin:", error);
    throw error;
  }
};

export const getKakaoUserInfo = async (accessToken: string) => {
  const url = new URL("https://kapi.kakao.com/v2/user/me");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

interface SignUpResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const updateSignUp = async (
  nickname: string,
  userId: string,
): Promise<SignUpResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/member/save`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname,
        email: userId,
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  return response.json() as Promise<SignUpResponse>;
};

export const getUser = async (userId: number): Promise<UserResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_V1}/member/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  return response.json();
};
