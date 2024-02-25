import React from 'react'
import {data} from '../restApi.json'

const WhoAreWe = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
      <div className="image_banner1">
              <h3>Tech We Know</h3>
            </div>
        <div className="container">
          <div className="text_banner">
            {
              data[0].who_we_are.slice(0,2).map(element=>(
                <div className="card module" key={element.id}>
                  <h3 className='heading' style={{fontWeight: "300"}}>{element.title}</h3>
                  <p>{element.s1}</p>
                  <p>{element.s2}</p>
                  <p>{element.s3}</p>
                  <p>{element.s4}</p>
                  <p>{element.s5}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img src="hacker.png " alt="hacker" />
          </div>
          <div className="text_banner">
            {
              data[0].who_we_are.slice(2).map(element=>(
                <div className="card module" key={element.id}>
                  <h3 className='heading' style={{fontWeight: "300"}}>{element.title}</h3>
                  <p>{element.s1}</p>
                  <p>{element.s2}</p>
                  <p>{element.s3}</p>
                  <p>{element.s4}</p>
                  <p>{element.s5}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section> 
    </>
  )
}

export default WhoAreWe
