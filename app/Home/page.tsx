import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-50 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-6">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800">
          Welcome to Our Security Project
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Tap the product you want to look for from these websites: <b>Mytek</b>, <b>SBS</b>, and <b>Tunisianet</b>, and we’ll find the best price for you!
        </p>
      </div>

      <div className="w-full max-w-lg mt-8">
        <div className="flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search for products..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button
            type="submit"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
