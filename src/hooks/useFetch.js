import { useEffect, useRef, useState } from "react"

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const body = useRef(_body)
    
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const result = await res.json()
                setLoading(false)
                setData(result)
                setError("")
                console.log("-------------")
            } catch (e) {
                setLoading(false)
                setError(e.message)
            }
        }
        fetchData(url)

        return () => controller.abort()
    }, [url, body])

  return { data, loading, error }
}
