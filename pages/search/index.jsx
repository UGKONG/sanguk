import { useContext, useEffect } from "react";
import { Store } from "../_app";

export default function MyFiles() {
  const { setTitle } = useContext(Store);

  useEffect(() => setTitle("검색"), [setTitle]);

  return <div></div>;
}
