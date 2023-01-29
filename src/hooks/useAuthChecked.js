import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthChecked = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem("auth"));
    if (localAuth?.accessToken && localAuth?.user) {
      dispatch(
        userLoggedIn({
          accessToken: localAuth.accessToken,
          user: localAuth.user,
        })
      );
    }

    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};
export default useAuthChecked;
