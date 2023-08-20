import React, { Component } from 'react'
import ProductItem from './ProductItem';

export class Products extends Component {
    constructor(){
        super()
        this.state = {
            products:[],
            id: 0
        }
    }
    async componentDidMount(){
        let url= "https://dummyjson.com/products"
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData)
        this.setState({
            products: parsedData.products,
            id: parsedData.id}
            
        )
    }

  render() {
    return (
      <div>
        <div className="row">   
        {this.state.products.map((element)=>{
            return(<div className='col md-4 col-4' key={element.id}>
                <ProductItem
                productImage={element.thumbnail}
                productTitle={element.title}
                productDescription={element.description}
                price={element.price}
                discountPercentage={element.discountPercentage}
                rating={element.rating}
                stock={element.stock}                               
                />
                {/* {console.log(element)} */}
            </div>)
        })}
        </div>   
      </div>
    )
  }
}

export default Products
