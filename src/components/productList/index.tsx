import React from 'react'
import ProductItem from '../productItem/index'

const ProductList = ({ list }) => {
  console.log(list)
  return (list.map((p, i) => <ProductItem p={p} />))
}

ProductList.prototypes = {
  list: Array
}
export default ProductList
