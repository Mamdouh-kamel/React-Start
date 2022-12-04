import React, { Component } from "react";
import Styles from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <>
        <section id="About" className={`${Styles.container}`}>
          <div className={`container text-center py-4`}>
            <h1 className={`${Styles.headline}`}>About</h1>
            <div className="row text-start m-auto">
              <div className={`col-md-4 ms-auto ${Styles.text}`}>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className={`col-md-4 me-auto ${Styles.text}`}>
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
