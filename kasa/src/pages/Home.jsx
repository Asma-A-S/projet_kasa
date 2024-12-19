import "../styles/Home.scss"
import Banner from "../components/Banner"
import data from "../data/data.json"
import Cards from "../components/Cards"
function Home(){
    console.log(data)
return(
<div className="home">
    <Banner texte="Chez vous, partout et ailleurs"/>
    <section className="gallery">
      {data.map(({id, title, cover})=>(
        <div className="card" key={id}>
            <Cards
             cover={cover}
             title ={title}/>
        </div>
      ))}
    </section>
</div>)
}
export default Home