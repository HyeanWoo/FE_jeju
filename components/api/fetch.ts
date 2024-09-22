<<<<<<< Updated upstream
import { Position } from "./types";
=======
// types.ts
export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
>>>>>>> Stashed changes

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
): Promise<TokenResponse> => {
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

    const data: TokenResponse = await response.json();
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
      method: "POST", // POST 메소드 사용
      headers: {
        "Content-Type": "application/json", // JSON 형식 지정
      },
      body: JSON.stringify({
        // 객체를 JSON 문자열로 변환
        nickname,
        email: userId,
      }),
      cache: "no-store", // 캐시 무효화
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  return response.json() as Promise<SignUpResponse>;
};
