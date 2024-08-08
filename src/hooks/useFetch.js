import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([])
    let url = `https://api.themoviedb.org/3/${apiPath}`
    if (apiPath.startsWith("search")) {
      url += `?query=${queryTerm}`
    }

    useEffect(() => {
        const fetchMovie = async () => {
          const options = {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
          }
          const res = await fetch(url, options)
          const json = await res.json()
          setData(json.results)
        }
        fetchMovie()
    }, [url])

  return { data }
}
