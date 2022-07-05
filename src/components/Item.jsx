import React from 'react'

export default function Item({title, img, price, desc}) {
  return (
    <article className="item">
        <div className="contain">
        <img src={img} alt={title} />
        <div className="content">
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{desc}</p>
        </div>
        </div>
    </article>
  )
}
