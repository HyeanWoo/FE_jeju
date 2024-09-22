"use client";

import { useEffect, useState } from "react";

const UserInfo = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const nickname = sessionStorage.getItem("nickname");
    if (nickname) {
      setName(nickname);
    }
  }, []);

  if (name === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-4 flex items-center space-x-4">
      <div>
        <h2 className="text-lg font-semibold">{name}님</h2>
        <p className="text-gray-500">{name} · 가입일 2024-09-23</p>
      </div>
    </div>
  );
};

export default UserInfo;
