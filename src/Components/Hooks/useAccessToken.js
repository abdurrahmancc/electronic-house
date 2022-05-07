import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const useAccessToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post("https://rocky-citadel-06569.herokuapp.com/login", {
          email: email,
        });
        localStorage.setItem("accessToken", data?.token);
        setToken(data?.token);
      }
    })();
  }, [user]);
  return [token];
};

export default useAccessToken;
