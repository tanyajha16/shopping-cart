// importing react to this js file
import React from 'react';

// creating a class with react component
class CartItem extends React.Component{
   
    render()
    {
        // adding styles by making a style object
        const styles={
         image:{
             height:110,
             width:110,
             borderRadius:4,
             backgroundColor:'#ccc'
         }
        }

        return(
           <div className="cart-item">
               <div className="left-block">
                   <img style={styles.image} />
               </div>
               <div className="right-block">
                   <div style={{fontSize:30,color:"red"}}>Phone</div>
                   <div style={{fontSize:30,color:"purple"}}>Rs 999</div>
                   <div >Quantity: 1</div>
                   <div className="cart-item-actions">
                     {/* buttons */}
                   </div>
               </div>
           </div>
        );
    }
}
export default CartItem;