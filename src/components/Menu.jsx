import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">Our Services</h1>
            <p>Work completion time varies according to the system complexity and the type of work needed to complete.</p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map(element => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
                <div className="overlay">
                  <p>{element.description}</p> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
