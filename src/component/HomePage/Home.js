import React from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from "./../../assets/1.png";
import possible from "./../../assets/2.png";
import cardimg from "./../../assets/01.jpg";
import cardim from './../../assets/02.jpg';
import cardi from './../../assets/03.jpg';
const Home = () => {
  return (
    <>
      <Header />
      <section className="number">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>1287+</h1>
              <h2>SAVINGS</h2>
            </div>
            <div className="col-md-3">
              <h1>5786+</h1>
              <h2>Photos</h2>
            </div>
            <div className="col-md-3">
              <h1>1440+</h1>
              <h2>Rockets</h2>
            </div>
            <div className="col-md-3">
              <h1>7110+</h1>
              <h2>Globes</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} title="img" />
            </div>
            <div className="col-md-6">
              <h1>
                We pride ourselves on making real food from the best
                ingredients.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="possible ">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>
                We make everything by hand with the best possible ingredients.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Etiam et purus a odio finibus bibendum in sit amet leo.
                <br /> Mauris feugiat erat tellus.Far far away, behind the word
                <br /> mountains, far from the countries Vokalia and
                Consonantia,
                <br />
                there live the blind texts.
              </p>
              <h5>
                Etiam sed dolor ac diam volutpat.
                <br />
                Erat volutpat aliquet imperdiet.
                <br />
                purus a odio finibus bibendum.
              </h5>
              <button>Learn More</button>
            </div>
            <div className="col-md-7">
              <img src={possible} title="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="para">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                When a man's stomach is full it makes no
                <br />
                difference whether he is rich or poor.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio
                <br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <h5>Watch Our Story</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="Explore ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Explore Our Foods</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet
                <br /> leo. Mauris feugiat erat tellus. Far far away, behind the
                word mountains, far from the countries Vokalia and
                <br /> Consonantia, there live the blind texts. Separated they
                live in Bookmarksgrove.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card border-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={cardimg} title="img" />
            <div className="info">
              <h4>Rainbow Vegetable Sandwich</h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div className="price">
                <span className="price-new">$10.50</span>
                <del className="price-old">$11.70</del>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <button> Order Now</button>
            </div>
            </div>
            <div className="col-md-4">
              <img src={cardim} title="img" />
            <div className="info">
              <h4>Rainbow Vegetable Sandwich</h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div className="price">
                <span className="price-new">$9.20</span>
                <del className="price-old">$10.50</del>
              </div>
              
            </div>
            <hr />
            <div className="bottom">
              <button>Order Now</button>
              
            </div>
            </div>

            <div className="col-md-4">
              <img src={cardi} title="img" />
            <div className="info">
              <h4>Rainbow Vegetable Sandwich</h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div className="price">
                <span className="price-new">$12.50</span>
                <del className="price-old">$13.20</del>
              </div>
            </div>
            <hr />

            <div className="bottom">
              <button> Order Now
              </button>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
