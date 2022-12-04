import React, { Component } from "react";
import Styles from "./Portfolio.module.css";
import img1 from "../../imgs/cabin.png";
import img2 from "../../imgs/cake.png";
import img3 from "../../imgs/game.png";
import img4 from "../../imgs/circus.png";
import img5 from "../../imgs/safe.png";
import img6 from "../../imgs/submarine.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="Portfolio" className="section h-auto">
          <div className="container">
            <div className="row m-auto py-5 text-center">
              <div>
                <h1 className={`pt-5 mb-5 ${Styles.headline}`}>Portfolio</h1>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img1} className={`${Styles.img}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img2} className={`${Styles.img}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img3} className={`${Styles.img}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img4} className={`${Styles.img}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img5} className={`${Styles.img}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={`${Styles.layer}`}>
                  <div className={` ${Styles.overlay}`}>
                     <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  </div>
                  <img src={img6} className={`${Styles.img}`} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    );
  }
}
