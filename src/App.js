import React, { Component } from "react";
import About from "./component/About";
import Interest from "./component/Interest";
import Button from "./component/Button ";
import Details from "./component/Details";
import Footer from "./component/Footer";
import Img from "./component/Img";
import styles from "./App.module.css";


class App extends Component {

  render() {
    return (
      <div className={styles.container}>
        <aside>
          <div className={styles.lady}>
            <Img />
          </div>
          <div className={styles.job}>
            <Details />
          </div>
          <div className={styles.btn}>
            <Button />
          </div>
          <div className={styles.paragraph}>
          <About />
          </div>
          <div className={styles.paragraph}>
          <Interest />
          </div>


          <div className={styles.foot}>
            <Footer />
          </div>


        </aside>

      </div>

    )
  }
}

export default App;

