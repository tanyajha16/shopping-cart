// importing react to this js file
import React from 'react';

// creating a class with react component
class CartItem extends React.Component{
//   creating a state and using a constructor need a super
 constructor()
{
       super();
       this.state={
       price:999,
       title:'Phone',
       quantity:1,
       img:" "
 };
//  this.testing();
//  another method of using binding function
//  this.increaseQuantity = this.increaseQuantity.bind(this);

 }
//  using promises and synchronous 
// testing()
// {
//     const promise=new Promise((resolve,reject) =>
//     {
//         setTimeout (() =>
//         {
//             resolve('done');
//         },5000)
//     })
//     // setState acts like a synchronous call here
//     promise.then(() => 
//     {
//         this.setState({quantity : this.state.quantity +10});
        
//         this.setState({quantity : this.state.quantity +10});
//         this.setState({quantity : this.state.quantity +10});

//         console.log('state',this.state);
//     });
// }

//  we can use arrow function instead of bind it will automatically add to the instance of the class
 increaseQuantity = () =>
 {
    //  this.state.quantity+=1;
     console.log('this.state',this.state);


    //  method 1
    //  this.setState({
    //      quantity:this.state.quantity+1
    //  });

    // method 2 now instead of object we will pass a callback function

    this.setState((prevState) =>
    {
        return {
            quantity:prevState.quantity+1
        }
    }, () =>
    {
        console.log(this.state);
    });

     
 }


 decreaseQuantity = () =>
 {
     if(this.state.quantity === 0)
     {
         return;
     }
     this.setState({
         quantity:this.state.quantity -1
     });
 }

    render()
    {
        // object destructuring
        const {price,title,quantity} = this.state;
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
   <div style={{fontSize:30,color:"red"}}>{title}</div>
   <div style={{fontSize:30,color:"purple"}}>Rs {price}</div>
   <div > Quantity : {quantity}</div>
   <div className="cart-item-actions">
   {/* buttons */}
   <img alt="increase " className="action-icons" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19853118391551940350-512.png" 
   onClick={this.increaseQuantity}
   />
   <img alt="decrease " className="action-icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNNhZs683Im8iVCiLmbxHSALHv0fAoOS68OvKqsFAsq-ZKIgHP&usqp=CAU" onClick={this.decreaseQuantity}
   />

   <img alt=" delete" className="action-icons" src="https://image.flaticon.com/icons/svg/61/61391.svg" />
   </div>
   </div>
   </div>
    );
}
}
export default CartItem;