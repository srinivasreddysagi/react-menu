import React from 'react';


export default function Item({ id, title, img, price, desc}) {
  return (
      <article className="item">
          <div className="contain">
              <img src={img} alt={title} />
              <div className="content">
                  <h2>{title}</h2>
                  <h3>
                      ₹{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </h3>
                  <p>{desc}</p>
              </div>
          </div>
      </article>
  );
}
