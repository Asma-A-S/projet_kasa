import banner from "../assets/banner-home.png"
function Banner( {texte}){
    return(
<div className="banner">
    <img src={banner} alt="image banner"/>
    <h1 className="texte">{texte}</h1>
</div>)
}
export default Banner