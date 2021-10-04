import React from "react";
import "../style/product.css";
// import ReactPlayer from "react-player";

function Products() {
  return (
    <div className="products">
      <div className="aboutUsText">
        <div className="starAndText">
          <i className="fas fa-star"> </i>
          <h2>CUSTOMER SERVICE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="starAndText">
          <i className="fas fa-star"> </i>
          <h2>PRODUCTS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="starAndText">
          <i className="fas fa-star"> </i>
          <h2>INSTANT DELIVERY</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="starAndText">
          <i className="fas fa-star"> </i>
          <h2>PAYMENT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="beforeProductText">
        <h1>What is TrapWare?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
          praesentium.
        </p>
      </div>
      <div className="trapAdHere">
        <div className="trapAdText">
          <h1>About TrapWare</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur cumque eligendi impedit in neque provident quaerat
            quibusdam repellendus! Beatae consequatur deleniti dignissimos esse
            ex facere hic id in laudantium libero numquam officiis omnis optio
            praesentium quasi, quis quod ratione repudiandae totam voluptate! Ab
            cupiditate facere fugit ipsum nisi nostrum quod.
          </p>
        </div>
        <div className="trapAdImg">
          <img src="/trapbox.png" alt="" />
        </div>
      </div>
      {/*<div className="videoWatch">*/}
      {/*  <h1>Watch Our Product Video</h1>*/}
      {/*  <div className="videoWatchList">*/}
      {/*    <ReactPlayer*/}
      {/*      style={{ padding: "1rem" }}*/}
      {/*      height="270px"*/}
      {/*      width="480px"*/}
      {/*      url="https://youtu.be/I51kCoLOaZo"*/}
      {/*    />*/}
      {/*    <ReactPlayer*/}
      {/*      style={{ padding: "1rem" }}*/}
      {/*      height="270px"*/}
      {/*      width="480px"*/}
      {/*      url="https://youtu.be/HycxWn4eojc"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default Products;
