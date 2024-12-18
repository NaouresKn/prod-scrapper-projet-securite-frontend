"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x175",
    title: "Product 1",
    price: "200 DT",
    website: "https://example.com/product1",
    websiteName: "Mytek",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x175",
    title: "Product 2",
    price: "150 DT",
    website: "https://example.com/product2",
    websiteName: "SBS",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x175",
    title: "Product 3",
    price: "180 DT",
    website: "https://example.com/product3",
    websiteName: "Tunisianet",
  },
];

const bestProduct = {
  id: 4,
  image: "https://via.placeholder.com/300x175",
  title: "Best Product",
  price: "140 DT",
  website: "https://example.com/product4",
  websiteName: "BestWeb",
};

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-50 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-6">
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Here’s what we’ve found! Take a look at these products and their prices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-4 text-center space-y-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[175px] w-full rounded-lg object-cover"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-md text-gray-600">{product.price}</p>
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {product.websiteName}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Best Price</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm ">
        <DrawerHeader>
          <DrawerTitle>Best Price Product</DrawerTitle>
          <DrawerDescription>
            Here is the product with the best price.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0 text-center space-y-3">
          <img
            src={bestProduct.image}
            alt={bestProduct.title}
            className="h-[175px] w-[300px] rounded-xl object-cover mx-auto"
          />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">
              {bestProduct.title}
            </h3>
            <p className="text-md text-gray-600">{bestProduct.price}</p>
            <a
              href={bestProduct.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {bestProduct.websiteName}
            </a>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</div>


    </div>
  );
}
