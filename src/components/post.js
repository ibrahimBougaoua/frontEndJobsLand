import React from "react";
import { Link } from "react-router-dom";

function Post(props){
const listItems = (elements) => { 
    return ( elements.map((element) => 
<div className="card border-0 mr-2 shadow-sm p-3 mb-3 bg-white rounded">
  <div className="card-body">
    <h5 className="card-title">{element[1]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{element[1]}</h6>
    <p className="card-text">{element[1]}</p>
    <Link to={props.link + element[10]} className="btn btn-sm btn-info">Read more</Link>
  </div>
</div>
));
}

return <div className="col-md-12 mb-5">
<h6 className="text-sm-left" style={{color: "#17a2b8",padding: "1.25rem",marginTop: "1.25rem",marginBottom: "1.25rem",border: "1px solid #17a2b8",borderLeftWidth: ".25rem",borderRadius: "0px",Color: "#5bc0de"}}>{props.name}</h6>
<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,5))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(5,10))}
</div>

</div>;

}

export default Post;