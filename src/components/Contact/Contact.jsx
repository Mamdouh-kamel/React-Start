import React, { Component } from 'react'
import Styles from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
      <>
      <section id='Contact' className={`pt-5 text-center ${Styles.container}`}>
        <div className="container">
        <h1 className={`${Styles.headline}`}>Contact me</h1>
          <div className="row">
            <div className="col-md-8 m-auto text-start d-flex flex-column py-2">
              <input type="text" placeholder='Name' className={`form-control ${Styles.my_input}`}/>
              <input type="email" placeholder='Email Address' className={`form-control ${Styles.my_input}`}/>
              <input type="tel" placeholder='Phone Number' className={`form-control ${Styles.my_input}`}/>
              <textarea name="" id="" cols="" rows="5" placeholder='Message' className={`form-control ${Styles.my_input}`}></textarea>
              <div>
                <button className={`btn btn-danger p-3 px-4 my-4`}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}
