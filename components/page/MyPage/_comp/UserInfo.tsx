"use client";

import { getUser } from "@/components/api/fetch";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = sessionStorage?.getItem("userId") as string;
      setUserId(id);
    }
  }, []);

  const { data } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUser(Number(userId)),
    enabled: !!userId,
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-4 flex items-center space-x-4">
      <div>
        <h2 className="text-lg font-semibold">{data.nickname}님</h2>
        <p className="text-gray-500">{data.createDate.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default UserInfo;
