import React, { Component } from "react";
import ProductItem from "./ProductItem";
import PropTypes from 'prop-types';

export class Products extends Component {
  static defaultProps=
  {
   category: "Hello"
  }
  static propTypes=
  {
    category:PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      products: [],
      id: 0,
      page: 1,
      cat: false
    };
    
  }
  async componentDidMount() {
    let url = "https://dummyjson.com/products";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    if(this.props.category!=="all")
    {
    this.setState({
      products: parsedData.products.filter(product=> product.category === this.props.category),
      id: parsedData.id,
      visible:false
    });
    }
    else
    {
      this.setState({
        products: parsedData.products ,
        id: parsedData.id,
        visible: true      
      });
    }
    console.log(this.state.products);
    console.log(this.props.category)
  }

  handlePreviousClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    });
    window.scrollTo(0, 0);
  };

  handleNextClick = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
    window.scrollTo(0, 0);
  };
  changePage =(pg)=>{
    this.setState(
      {page: pg}
    )
    window.scrollTo(0, 0);
  };
  // this.state.products.map
  // product.category === this.props.category
  render() {
    return (
      <div>
       <div className="row gx-0">           
          {this.state.products
            .filter(
              (product) =>             
                this.state.products.indexOf(product)+1>= this.state.page &&
                this.state.products.indexOf(product)+1<= this.state.page * 10               
            )
            .map((element) => {
              return (
                <div className="col md-4 col-4" key={element.id}>
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
                </div>
              );
            })}
        </div>
        {/* <div className="row justify-content-between">  
          <div className="col-4"><button type="button" className="btn btn-primary">Primary </button></div>
          <div className="col-4"><button type="button" className="btn btn-primary">Primary </button></div>
        </div> */}
        <div className="container d-flex justify-content-between text-center">
          <div className="col-4">
            <button
              type="button"
              disabled={this.state.page === 1 || this.state.cat===true}
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
            >
              Previous{" "}
            </button>
          </div>
          <div className="btn-toolbar" role="toolbar">
          <div className="btn-group me-2" role="group">
            {this.state.visible && <button type="button" className="btn btn-primary" onClick={()=>this.changePage(1)}>1</button>}
            {this.state.visible && <button type="button" className="btn btn-primary" onClick={()=>this.changePage(2)}>2</button>}
            {this.state.visible && <button type="button" className="btn btn-primary" onClick={()=>this.changePage(3)}>3</button>}
      </div>
      </div>
          <div className="col-4">
            <button
              type="button"
              disabled={this.state.page === 3 || this.state.cat===true}
              className="btn btn-primary"
              onClick={this.handleNextClick}
            >
              Next{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
