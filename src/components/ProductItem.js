import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
function ProductItem(props)
{
    return(
      <div>
        <div
          className="card my-3 mx-3 "
          style={{ margin: "auto", border: "black solid 3px" , backgroundColor:"#060b10", color: "white"}}
        >
          <img
            src={props.productImage}
            className="card-img-top img"
            alt={props.productImage}
            height="350px"
            style={{ objectFit: "contain", width: "100%", maxHeight: "350px" ,backgroundColor:"#060b10",border: 'solid black 2px'}}
          />
          <div className="card-body" >
            <h5 className="card-title">{props.productTitle}</h5>
            <p className="card-text">{props.productDescription}</p>
            <Link
            
              onClick={async()=>{await props.setProductId(props.element.id); await props.setElement(props.element) }}
              to= {"../product_"+props.element.id}
              className="btn btn-primary"
              style={{
                position: "relative",
                left: "-1%",
              }}
              
              
            >
              Buy Now
            </Link>
            <span
              className="badge text-bg-success"
              style={{
                position: "absolute",
                left: "88%",
                bottom: "3%",
                fontSize: "0.8em",
              }}
            >
              {props.rating}{" "}
              <span style={{ fontSize: "100%", color: "yellow" }}>&#9733;</span>
            </span>
            <h4 className="my-3">Price: <s >&#36;{props.price}</s><span style={{fontSize: "1.7rem", color:"green"}}> ${Math.ceil(props.price-props.price*props.discountPercentage/100)-0.01}</span></h4>
          </div>
        </div>
      </div>
    )
}

export default ProductItem;
