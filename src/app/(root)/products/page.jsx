import Link from "next/link";

export const metadata = {
  title: "Products",
  description: "This is a Products Page",
};

const Products = () => {
  return (
    <div>
      <ul className="flex gap-6 p-4 bg-gray-500">
        <li>
          <Link href="/products/allProducts">All Products</Link>
        </li>
        <li>
          <Link href="/products/specificProduct">Specific Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
