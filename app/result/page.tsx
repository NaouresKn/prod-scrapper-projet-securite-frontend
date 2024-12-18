"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useScrapper } from "@/hooks"

import Loader from "@/components/loader"

export default function Home() {
  const [search, setSearch] = React.useState<string>("")

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { data, getRes, bestProd } = useScrapper()

  React.useEffect(() => {
    const url = new URLSearchParams(window.location.search)
    const searchQuery = url.get("search")
    if (searchQuery) {
      setSearch(searchQuery)
    } else {
      window.location.href = "/Home"
    }
  }, [])

  React.useEffect(() => {
    setIsLoading(true)
    if (search) {
      getRes(search).finally(() => {
        setIsLoading(false)
      })
    }
  }, [search])

  return isLoading ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="grid place-items-center min-h-screen bg-gray-50 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-6">
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Here’s what we’ve found! Take a look at these products and their
          prices. <strong>{search}</strong>
        </p>
      </div>

      <h3 className="text-center w-full text-2xl py-10">From Mytek</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {(data as any)?.mytek &&
          (data as any)?.mytek.map((product: any, index: number) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 text-center space-y-4"
            >
              <img
                src={product.Image}
                alt={product.Name}
                className="h-[175px] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.Name}
                </h3>
                <p className="text-md text-gray-600">{product.Price}</p>
                <a
                  href={product.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
      </div>

      <h3 className="text-center w-full text-2xl py-10">From SBS INFO</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {(data as any)?.sbs &&
          (data as any)?.sbs.map((product: any, index: number) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 text-center space-y-4"
            >
              <img
                src={product.Image}
                alt={product.Name}
                className="h-[175px] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.Name}
                </h3>
                <p className="text-md text-gray-600">{product.Price}</p>
                <a
                  href={product.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
      </div>

      <h3 className="text-center w-full text-2xl py-10">From Tunisianet</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {(data as any)?.tunisianet &&
          (data as any)?.tunisianet.map((product: any, index: number) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 text-center space-y-4"
            >
              <img
                src={product.Image}
                alt={product.Name}
                className="h-[175px] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.Name}
                </h3>
                <p className="text-md text-gray-600">{product.Price}</p>
                <a
                  href={product.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Predicted Best Product</Button>
          </DrawerTrigger>
          <DrawerContent>
            {bestProd && (
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Predicted Best Product</DrawerTitle>
                  <DrawerDescription>
                    We suggest this product for you with its best price!
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 text-center space-y-3">
                  <img
                    src={bestProd.Image}
                    alt={bestProd.Name}
                    className="h-[175px] w-[300px] rounded-xl object-cover mx-auto"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{bestProd.Name}</h3>
                    <p className="text-md text-gray-600">{bestProd.Price} DT</p>
                    <a
                      href={bestProd.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit Link
                    </a>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
