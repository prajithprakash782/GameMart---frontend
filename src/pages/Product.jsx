import React, { useContext } from 'react'
import { AddItemContext } from '../Context/ContextShare'
import { useParams } from 'react-router-dom'

import Footer from '../components/Footer'
import ItemDisplay from '../components/ItemDisplay'
import RelatedItems from '../components/RelatedItems'

function Product() {
  const {products} = useContext(AddItemContext)
  const {itemId} =useParams()
  const item = products.find((e)=>e.id===Number(itemId)) 
  return (
    <>
      
      <ItemDisplay item={item}/>
      <hr />
      <RelatedItems/>
      <Footer navigation/>
    </>
  )
}

export default Product