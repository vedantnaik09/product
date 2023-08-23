import React, {  useState } from "react";
import tick from "../resource/tick.png";

function Product(props) {
  const [displayImg, setDisplayImg] = useState(props.element.thumbnail);
  const [imgSize, setImgSize] = useState("big");
  const [clickIndex, setClickIndex] = useState(0);
  const [imgState, setImgState] = useState(0);
  function updateWidth(e,newWidth){
    if(imgSize==="big"){
    e.target.style.height= "120px"
    e.target.style.width= "120px"
    setImgSize("small")
    }
    else{
      e.target.style.height= "50px"
      e.target.style.width= "50px"
      setImgSize("big")
    }
  }
  return (
    
    <div>
      <div className="row text-white gx-0">
        <div
          className="col-md-4 mx-5"
          style={{ marginTop: "5%", height: "auto" }}
        >
          <div className="well" style={{ textAlign:"center"}}>
            <img
              src={imgState?displayImg:props.element.thumbnail}
              className="rounded float-left"
              alt=""
              style={{height:"500px", width:"-webkit-fill-available" }}
            />
          </div>
          <div className="my-3" style={{textAlign:"center",margin:"auto",height:"50px"}}>
          {props.element.images?.map((item) => {
            return(               
              <img className="mx-2" onClick={()=>{setDisplayImg(item); setClickIndex(props.element.images.indexOf(item));setImgState(1)}} onMouseEnter={updateWidth} onMouseLeave={updateWidth} src={item} alt={item} style={{ width: "50px",height:"50px", border:clickIndex===props.element.images.indexOf(item)?"solid red 2px":"solid white 2px" }} />          
            )
          })}
          </div>
        </div>

        <div className="col-md-6 mx-3" style={{ marginTop: "5%" }}>
          <div className="well" style={{ height: "auto" }}>
            <h1 className="display-3">{props.element.title}</h1>
            <span className="badge text-bg-success">
              {props.element.rating}{" "}
              <span style={{ fontSize: "100%", color: "yellow" }}>&#9733;</span>
            </span>
            <h5 className="my-2" style={{ color: "#3bf93b" }}>
              {props.element.stock} left in stock
            </h5>
            <h4 className="my-3">
              Price: <s>&#36;{props.element.price}</s>
              <span
                className="mx-2"
                style={{
                  fontSize: "1.7rem",
                  color: "lime",
                  display: "inline-block",
                }}
              >
                {" "}
                $
                {Math.ceil(
                  props.element.price -
                    (props.element.price * props.element.discountPercentage) /
                      100
                ) - 0.01}
              </span>
            </h4>
            <h5
              className="mx-2 "
              style={{ display: "inline-block", color: "#c7c7c7" }}
            >
              {props.element.discountPercentage}% off
            </h5>
          </div>
          <div className="well" style={{ height: "auto" }}>
            <h1 className="display-6">{props.element.description}</h1>
            <h5 className="my-3">
              Seller: <u>{props.element.brand}</u>
            </h5>
            <div
              style={{
                fontSize: "21px",
              }}
            >
              <p style={{ marginTop: "25px", marginBottom: "1px" }}>
                <img src={tick} alt={tick} style={{ width: "25px" }} /> The
                product is eligible for free delivery.
              </p>
              <p className="my-1">
                <img src={tick} alt={tick} style={{ width: "25px" }} /> 7 Days
                Service Center Replacement/Repair
              </p>
              <p className="my-1">
                <img src={tick} alt={tick} style={{ width: "25px" }} /> GST
                invoice available
              </p>
              <p className="my-1">
                <img src={tick} alt={tick} style={{ width: "25px" }} /> Top
                Brand indicates high quality, trusted brands on Amazon
                aggregated basis verified ratings, returns/refunds and recent
                order history at brand level.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-lg my-5"
              style={{
                backgroundColor: "#fb641b",
                marginRight: "18px",
                color: "black",
              }}
            >
              Buy Now
            </button>
            <button
              type="button"
              className="btn btn-warning btn-lg my-5"
              style={{ marginRight: "18px", color: "black" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
