const Home = () => {
  return (
    <div>

    <div className="home-container">
      <div className="home-boxes">
        <h3>OUR VISION</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          placeat similique pariatur saepe, numquam porro. Voluptatibus cumque,
          suscipit itaque quod nulla omnis maxime harum amet nesciunt quae, odit
          porro ipsum?
        </p>
      </div>
      <div className="home-boxes">
        <h3>OUR MISSION</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          placeat similique pariatur saepe, numquam porro. Voluptatibus cumque,
          suscipit itaque quod nulla omnis maxime harum amet nesciunt quae, odit
          porro ipsum?
        </p>
      </div>
      <div className="home-boxes">
        <h3>OUR HISTPORY</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          placeat similique pariatur saepe, numquam porro. Voluptatibus cumque,
          suscipit itaque quod nulla omnis maxime harum amet nesciunt quae, odit
          porro ipsum?
        </p>
      </div> 
    </div>

    <div className="service-container">
        <h2>SERVICES</h2>
        <div className="box-con">
        <div className="service-box">
        <img src="https://thumbs.dreamstime.com/b/home-decor-design-template-logo-concept-decoration-135201214.jpg" alt="" />
        <h3>HOME DECORATION</h3>
        </div>
        <div className="service-box">
        <img src="data:image/png;base64,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" alt="" />
        <h3>INTER. CONNECTION</h3>
        </div>
        <div className="service-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wnWVdSJpbw_NOJJ5py8IJsY2D7p89uZ9Jg&usqp=CAU" alt="" />
        <h3>DELIVERY SERVICE</h3>
        </div>
        <div className="service-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcafgoBzWSzxiV6t1a2uNA4PTpMY7S2KRcQ&usqp=CAU" alt="" />
        <h3>PRINTING PRESS</h3>
        </div>
        <div className="service-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJqubdDwsY-R9Keyv4TMK5w9NZ_j9-k4J-w&usqp=CAU" alt="" />
        <h3>LOGISTIC</h3>
        </div>
        </div>
       
      </div>

    </div>
    
  );
};

export default Home;
