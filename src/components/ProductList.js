import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products")
    const { data: products, loading, error } = useFetch(url, { content: "abv" })
    
  return (
    <section>
        <div className="filter">
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
        { loading && <p>Loading products...</p> }
        { error && <p>{error}</p> }
        { products && products.map((prod) => (
            <div className="card" key={prod.id}>
                <p className="id">{prod.id}</p>
                <p className="name">{prod.name}</p>
                <p className="info">
                    <span>${prod.price}</span>
                    <span className={prod.in_stock ? "instock" : "unavailable"}>{prod.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>
        )) }
    </section>
  )
}
