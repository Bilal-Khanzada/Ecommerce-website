import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router';
import Breadcrum from '../Components/Breadcrumbs/Breadcrum';
import Productdisplay from '../Components/product display/Productdisplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const{productId}=useParams();
  const product =all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}
export default Product;