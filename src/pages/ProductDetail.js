import { useParams } from "react-router"

export const ProductDetail = () => {
  const params = useParams()
  return (
    <div>ProductDetail - {params.id}</div>
  )
}
