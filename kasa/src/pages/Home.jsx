import "../styles/Home.scss"
import Banner from "../components/Banner"
import data from "../data/data.json"
import Cards from "../components/Cards"
function Home(){
    console.log(data)
return(
<>
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
</>)
}
export default Home