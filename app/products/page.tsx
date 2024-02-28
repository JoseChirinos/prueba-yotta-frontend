'use client'
import { useEffect, useState } from "react"
import Sidebar from "@/common/components/Sidebar"
import { MenuList } from "@/common/config/menu-list"
import ProductList from "./components/ProductList"
import { Product } from "@/common/interfaces/product.interface"

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const httpProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products')
      const data = await response.json()

      setProducts(data)
      setLoading(false)

    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    httpProducts()
  }, [])

  return (
    <div className="w-full h-full bg-black">
      <Sidebar links={MenuList}/>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-yellow-600">
          Cargando...
        </div>
      ) : (
        <>
          <div className="container">
            <h1 className="text-2xl text-yellow-400">Lista de Productos</h1>
          </div>
          <div className="container py-8">
            <ProductList products={products}/>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductsPage
