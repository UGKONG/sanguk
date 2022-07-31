import { useContext, useEffect } from "react";
import { Store } from "./_app";

export default function Home() {
  const { setTitle } = useContext(Store);

  useEffect(() => setTitle("소개"), [setTitle]);

  return <div>이름: 전상욱</div>;
}
