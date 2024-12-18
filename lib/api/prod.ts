import axios from "axios"

const getResults = async (search: string) => {
  if (!search) {
    throw new Error("Search query is required")
  }

  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND}/api/scrap?search=${search}`
  )
}

export { getResults }
