
import BirdList from "./Birds";
const Service = () => {


    return(
        
        
            <div>
        
        <div className="service-con">

            <h1 style={{textAlign: 'center'}}>BIRDS SPECIES AND THEIR FEATURES</h1>
            
        </div>

        <div className="bird-container">
           {
               BirdList.map((BirdList) => {
                const {name, colour, habitant,imageUrl} = BirdList
                return(
                    <div key={BirdList.id} className="bird con" >
                        <h2>{name}</h2>
                        <div className="bird-info">
                        <p>COLOUR: {colour}</p>
                        <p>HABITANT: {habitant}</p>
                        </div>
                        <div className="image-card">
                        <img src={imageUrl} alt="/" />
                        </div>

                    </div>
                )
               })
           }
        </div>
        </div>
    )

   

};

export default Service;