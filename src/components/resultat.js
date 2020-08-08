import React from "react";
import { Link } from "react-router-dom";

function Resultat(props){

const listItems = props.elements.map((element) =>
<div className="col-md-3">
<div className="card border-0 mr-2 shadow-sm mb-3 bg-white rounded">
  <div className="card-body">
    <h6 className="card-subtitle mb-3 text-dark w-100">{ element[5].length < 50 ? element[5] : element[5].substring(0, 50) + '...' }</h6>
    <p className="card-subtitle mb-3 text-muted w-100">company : { element[2].length < 15 ? element[2] : element[2].substring(0, 15) + '...' }</p>
    <p className="card-subtitle mb-3 text-muted">published : {element[1]}</p>
    <Link to={'/single/' + element[10]} className="btn btn-sm btn-outline-info">Read more</Link>
  </div>
</div>
</div>
);

return <div className="container mt-3">
<p className=" text-sm-left">Resultat</p>
<div className="row">
    {listItems}
</div>
</div>;

}

export default Resultat;