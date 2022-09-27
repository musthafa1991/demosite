import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
<div className="card pcard shadow mt-3" style={{width: "18rem"}}>
  <img src={data.pic} className="card-img-top" height="200px" alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-primary">Know More</Link>
  </div>
</div>
  )
}

export default Card;