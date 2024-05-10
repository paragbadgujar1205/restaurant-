import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {menuData.map((curElem) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-12 g-4">
                  <div className="card-container" key={curElem.id}>
                    <div className="card">
                      <div className="card-body">
                        <span className="card-number card-circle subtle">
                          {curElem.id}
                        </span>
                        <span className="card-author subtle">
                          {curElem.name}
                        </span>
                        <h2 className="card-title">{curElem.name}</h2>
                        <div className="card-description subtle">
                          {curElem.description}
                        </div>
                        <div className="card-read">Read</div>
                      </div>
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media mb-4"
                      />
                      <button className="btn btn-outline-light">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
