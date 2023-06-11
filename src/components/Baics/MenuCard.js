import React from 'react'

const MenuCard = ({menuData}) => {
  // console.log(menuData)
 
return(
  <>
  <section className="main-card--cointainer"> 
   {menuData.map((curElem) =>{
    return(
      <>
      <div className='card-container' key = {curElem.id}>
      <div className='card'>
          <div className="card-body">
              <span className="card-number subtle">{curElem.id}</span>
              <span className="card-author subtitle" style={{color:"red"}}>curElem.id</span>
              <h2 className="card-title"> {curElem.name}</h2>
              <span className="card- discription subtitle">{curElem.description}</span>
              <div className="card-read">Read</div>
          </div>
          <img src={curElem.image} alt="images" className="card-media" />
          <span className="card-tag  subtitle">Order Now</span>

      </div>
  </div>
  </>

    );

     })}
     </section>
  </>  
);  
};

export default MenuCard