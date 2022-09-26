import React from "react";

function Home() {
  return (
    <section >
      <div className="container-fluid mx-auto ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                <h1>
                  This is home page of the
                  <strong className="webname"> DemoWebsite</strong>
                </h1>
                <h5>The next version of the website will update soon</h5>
                <div className="mt-3 mb-5">
                  <button className="get-started-btn">Get Started</button>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img 
                  src="https://st.depositphotos.com/5934840/59858/v/450/depositphotos_598583004-stock-illustration-columbus-caravel-silhouette-style-icon.jpg"
                   width="450" alt="image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
