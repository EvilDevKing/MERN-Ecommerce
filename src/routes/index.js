import { Routes, Route } from 'react-router'
import {
    Home, ProductList, ProductDetail, PageNotFound,
    Contact, ContactIn, ContactEu, ContactUs
} from "../pages"

export const AllRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />}>
                    <Route path="in" element={<ContactIn />} />
                    <Route path="eu" element={<ContactEu />} />
                    <Route path="us" element={<ContactUs />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    )
}