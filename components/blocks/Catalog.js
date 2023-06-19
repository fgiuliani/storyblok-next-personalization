"use client";
import Image from "next/image";
import { getCookie, setCookie } from "cookies-next";

const Catalog = ({ products, category }) => {
  if (!getCookie("user_type") && category) {
    setCookie("user_type", category);
  }

  return (
    <div className="container mx-auto px-[25px] mt-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10">
        {products.map((product) => (
          <div key={product.uuid} className="flex flex-col">
            <Image
              src={`${product.content.image.filename}/m/500x300/smart/`}
              width={500}
              height={300}
              alt={product.name}
              className="h-[250px] w-full object-cover object-top rounded-lg"
            />
            <h3 className="mt-6 text-xl">{product.name}</h3>
            <span>&euro; {product.content.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
