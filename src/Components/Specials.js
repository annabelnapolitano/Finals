import React from 'react';
import './Specials.css';

const specials = [
  {
    title: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imgSrc: '/images/greek salad.jpg'
  },
  {
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    imgSrc: '/images/bruschetta.svg'
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imgSrc: '/images/lemon dessert.jpg'
  }
];

function Specials() {
  return (
    <section className="specials-container">
      <div className="header">
        <h2>This weeks specials!</h2>
        <button className="btn-menu">Online Menu</button>
      </div>
      <div className="cards">
        {specials.map(({title, price, description, imgSrc}) => (
          <article className="special-card" key={title}>
            <img src={imgSrc} alt={title} className="special-img" />
            <div className="special-text">
              <h3>{title} <span className="price">{price}</span></h3>
              <p>{description}</p>
              <a href="/order" className="order-link">Order a delivery</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
