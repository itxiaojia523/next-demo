import { Suspense } from "react";
import { Product } from "../components/product";
import { Reviews } from "../components/reviews";

export default function ProductReviews() {
  // 默认4s后全部加载完后显示
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>loading product</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading product</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
