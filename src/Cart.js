import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
       
        // destructuring of the state
        const {products} = props;
        return (
            <div className ="cart">
                {products.map((product) =>
                {
                   return (
                   <CartItem 
                   product={product}
                   key ={product.id}
                   onIncreaseQuantity = {props.onIncreaseQuantity }
                   onDecreaseQuantity = {props.onDecreaseQuantity}
                   onDeleteProduct = {props.onDeleteProduct}
                  />
                   );
                })}
               {/* <CartItem quantity={1} price ={878} title={"watch"} /> */}
            </div>
        );
    }

export default Cart;