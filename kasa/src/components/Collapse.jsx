import { useState } from "react"
import arrow from "../assets/arrow.png"
function Collapse({head, body}){
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return( 
    <>
        <div className="dropdown-header">
            <h2>{head}</h2>
            <img 
                src={arrow} 
                alt={isOpen ? "Masquer le contenu" : "Afficher le contenu"} 
                className={`arrow ${isOpen ? "rotated" : ""}`} 
                onClick={toggleCollapse} 
                aria-expanded={isOpen} 
            />
        </div>
        <div className={`collapse_description ${isOpen ? "show" : "hide"}`}>
          <p>{body}</p>
        </div>
    </>
    );
}
export default Collapse