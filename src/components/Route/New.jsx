import "./new.css";
import Nature from "./Nature";

const New = () => {
  return (
    <div className="nature-container">
       <div className="inner">
       {
            Nature.map((Nature) => {
                const {imageUrl, title, description } = Nature
                return(    
                    <div key={Nature.id} className="card">
                        <div className="image">
                        <img src={imageUrl} alt="" />
                        </div>
                        <div className="bg">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        </div>
                        </div>
                )
            })
        }
       </div>
    </div>  
  );
};

export default New;
