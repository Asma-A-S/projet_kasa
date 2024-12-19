function Cards ({cover, title}){
    return(
        <div className="card">
            <img src ={cover} alt="photo de la location"/>
            <h2 className="title">{title}</h2>
        </div>
    )
}
export default Cards