import { useContext, useEffect } from "react";
import { Store } from "../_app";

export default function Setting() {
  const { setTitle } = useContext(Store);

  useEffect(() => setTitle("설정"), [setTitle]);

  return <div></div>;
}
