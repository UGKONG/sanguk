import { useContext, useEffect } from "react";
import { Store } from "../_app";

export default function Dictionary() {
  const { setTitle } = useContext(Store);

  useEffect(() => setTitle("용어사전"), [setTitle]);

  return <div></div>;
}
