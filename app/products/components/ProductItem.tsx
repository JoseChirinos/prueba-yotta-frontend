import { Product } from "@/common/interfaces/product.interface"

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[200px] p-8 h-60 rounded-lg bg-slate-300">
      <h3 className="text-md text-blue-700">
        {product.name}<br />
        <small className="text-black font-bold">
        ${product.price}
        </small>
      </h3>
      <p className="text-sm text-blue-950">
        {product.description}
      </p>
    </div>
  )
}

type ProductItemProps = {
  product: Product
}

export default ProductItem
