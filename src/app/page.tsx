import { Suspense } from "react";
import Product from "./product/page";

export default async function Home() {
  return (
    <Suspense>
      <Product/>
    </Suspense>
  );
}
