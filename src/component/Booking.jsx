import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <>
      <div className="banner">
        <nav className="navbar pt-4 px-md-5 z-3">
          <div className="container-fluid px-md-5 align-items-baseline">
            <a className="navbar-brand" href="ww">
              <h1 className="text-primary m-0 logo">
                <i className="fa fa-utensils me-3"></i>Restoran
              </h1>
            </a>
          </div>
        </nav>
        <div className="row pt-2">
          <div className="col-lg-6 col-md-8 mx-auto mt-lg-5">
            <div className="container">
              <form action="" method="post" className="p-3 rounded-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required=""
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required=""
                />

                <input type="date" id="date" name="date" required="" />

                <input
                  type="number"
                  id="people"
                  name="people"
                  placeholder="people"
                  min={1}
                  required=""
                />
                <label htmlFor="requests">Special Requests:</label>
                <textarea
                  id="requests"
                  name="requests"
                  placeholder="Any special requests..."
                  defaultValue={""}
                />
                <button className="book-btn">Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
