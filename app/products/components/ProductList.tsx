import { Product } from "@/common/interfaces/product.interface"
import ProductItem from "./ProductItem"

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap w-full gap-8">
      {
        products.map(product => (
          <ProductItem key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

type ProductListProps = {
  products: Product[]
}

export default ProductList
