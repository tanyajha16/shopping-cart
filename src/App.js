import React from 'react';
import './App.css';
// import cart item
import Navbar from './Navbar';
import Cart from './Cart';

// importing firebase
import * as firebase from'firebase';

class App extends React.Component {
  constructor()
  {
         super();
         this.state={
          products :[],
          loading:true
   }
this.db = firebase.firestore();


   //  this.testing();
  //  another method of using binding function
  //  this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount ()
  {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);
    //   snapshot.docs.map((doc) => 
    //   {
    //     console.log(doc.data())
    //   });
    //   const products = snapshot.docs.map((doc) =>
    //   {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products:products,
    //     loading:false
    //   });
    // })

   this.db
    .collection('products')


    // using quering the data
    // .where('price','==',999)
    // .where('title','==','Mobile Phone')

    // to sort the data in order of price
    .orderBy('price',"desc")

    .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => 
        {
          console.log(doc.data())
        });
        const products = snapshot.docs.map((doc) =>
        {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products:products,
          loading:false
        });
      })
  }
  handleIncreaseQuantity = (product)=>
  {
          console.log('hey please increase the quantity',product);  
          const{products} = this.state;
          const index= products.indexOf(product)
              // products[index].quantity +=1;
  
              // this.setState({
              //     products:products
              // },()=>{
              //     console.log('Increased product',products[index]);
                   
              //   });

              const docRef = this.db.collection('products').doc(products[index].id);
                 docRef 
                 .update({
                        quantity:products[index].quantity+1
                 })
                 .then(() =>
                 {
                   console.log("updates successfully")
                 })
                 .catch((error)=>
                 {
                   console.log('error',error);

                 })
     
     
            }
  handleDecreaseQuantity = (product)=>
  {
      console.log("hey decrease the quantity",product);
      const {products} =this.state;
       const index=products.indexOf(product)
      if(products[index].quantity === 0)
       {
           return;
       }
       const docRef=this.db.collection('products').doc(products[index].id);
       docRef 
       .update({
              quantity:products[index].quantity-1
       })
       .then(() =>
       {
         console.log("updates successfully")
       })
       .catch((error)=>
       {
         console.log('error',error);

       }) 
      // products[index].quantity -=1
      // this.setState({
      //     products:products
      // },()=>{
      //     console.log("Updated product",products[index])
      // });
  }
  handleDeleteProduct = (id) =>
  {
      const {products} =this .state;
      // const items =products.filter((item)=> item.id  !== id);
      // this.setState({
      //     products:items
      // });
      const docRef = this.db.collection('products').doc(id);
      docRef
      .delete()
      .then(() =>
      {
        console.log('delete successfully');
      })
      .catch((error) =>
      {
        console.log('error',error);
      })
  }  

  getCartCount=() => {
    const {products} = this.state;
    let count =0;
    products.forEach((product) => {
      count +=product.quantity;
    })
    return count;
  }
  getCartTotal = () =>
  {
    const{products} =this.state;
    let cartTotal =0;
    products.map((product) =>
    {
      cartTotal = cartTotal+ product.quantity* product.price;
    })
    return cartTotal;
  }

  addProduct =() =>
  {
    this.db
    .collection('products')
    .add({
      img:" ",
      price:9000,
      quantity:2,
      title:"washing-machine"
    })
    .then((docRef) =>
    {
       console.log('product has been added ',docRef);
    })
    .catch((error) =>
    {
         console.log("error:",error);
    })
  }

  render ()
  {
    const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style ={{padding:10,fontSize:20}}>Add a product</button> */}
     <Cart 
     products = {products}
       onIncreaseQuantity = {this.handleIncreaseQuantity }
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteProduct = {this.handleDeleteProduct}
      />
      {loading && <h1>Loading products...</h1>}
      <div style ={{padding :10,fontSize:20,backgroundColor:"rgb(66, 103, 178)",color:"white",textAlign:"right",fontWeight:"bold",height:'50px'}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
