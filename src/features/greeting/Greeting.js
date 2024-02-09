import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessage } from "./greetingSlice";

export function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greet.message);
  const messageStatus = useSelector((state) => state.greet.status);

  useEffect(() => {
    if (messageStatus === "idle" && message === "") {
      dispatch(fetchMessage());
    }
  }, [messageStatus, dispatch, message]);

  return (
    <div>
      <h2>Random Message:</h2>
      {messageStatus === "loading" ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}
