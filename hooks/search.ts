import { useState } from "react"

import { getResults } from "@/lib/api/prod"

import { toast } from "react-hot-toast"

const useScrapper = () => {
  const [searchInput, setSearchInput] = useState<string>("")

  const [bestProd, setProd] = useState<any>(null)

  const submitSearch = () => {
    toast.loading("Searching for products...")
    window.location.href = `/result?search=${searchInput}`
  }

  const [data, setData] = useState<any>(null)

  const getRes = async (search: string) => {
    if (!search) {
      throw new Error("Search query is required")
    }

    try {
      const call = await getResults(search)

      if (call.status === 200) {
        setData(call.data)

        const separated = call.data.AIResponse.split(";")
        setProd({
          Name: separated[0],
          Price: separated[1],
          Image: separated[2],
          Link: separated[3],
          Website: separated[4],
        })
      } else {
        toast.error("An error occurred while fetching the data")
      }
    } catch (e) {
      console.log(e)
      toast.error("An error occurred while fetching the data")
    }
  }
  return {
    searchInput,
    setSearchInput,
    submitSearch,
    data,
    getRes,

    bestProd,
  }
}

export default useScrapper
