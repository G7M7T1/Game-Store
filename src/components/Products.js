import React from "react";
import "../style/product.css";
import ReactPlayer from "react-player";

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
      <div className="videoWatch">
        <h1>Watch Our Product Video</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
          praesentium.
        </p>
        <div className="videoWatchList">
          <ReactPlayer
            style={{ padding: "1rem" }}
            height="50vh"
            width="60vw"
            url="https://youtu.be/IItoAi3Kpiw"
          />
          <h1>Watch Our Other Video</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            praesentium.
          </p>
          <ReactPlayer
            style={{ padding: "1rem" }}
            height="50vh"
            width="60vw"
            url="https://youtu.be/a0xbs4sVEq4"
          />
        </div>
      </div>
      <div className="reviewsContainer">
        <div className="reviewsBeginText">
          <h1>Reviews</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            praesentium.
          </p>
        </div>
        <div className="reviewsCardsList">
          <div className="reviewsCard">
            <h1>Trap</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star-half-alt"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Alucard</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Jack</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="far fa-star"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Mars</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Line</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Guss</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star-half-alt"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>G7M7T1</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="far fa-star"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>

          <div className="reviewsCard">
            <h1>Xu Xu</h1>
            <div className="starHere">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star-half-alt"> </i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              consequatur ea eum fugiat nisi nostrum quibusdam rem, sapiente
              tempora vitae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
