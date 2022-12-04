import React, { Component } from 'react'
import Styles from './Home.module.css'
import myImge from '../../imgs/avataaars.svg'

export default class Home extends Component {
  render() {
    return (
      <>
      <section className={`bg-danger ${Styles.home}`}>
        <div className="container text-center d-flex align-items-center justify-content-center flex-column">
                 <img src={myImge} className="img-fluid w-25 py-3" alt="" />
                  <h1 className={Styles.headline}>start react</h1>
                  <p className={`text-white ${Styles.text}`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>

      </>
    )
  }
}
