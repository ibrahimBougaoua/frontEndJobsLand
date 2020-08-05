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
    <Link to={props.link + element[10]} className="btn btn-sm btn-outline-info">Read more</Link>
  </div>
</div>
));
}

return <div className="col-md-12 mb-5">
<a className="navbar-brand text-sm-left text-info mb-3" style={{padding: "0px 0px 0px 8px",borderStyle: "solid",borderWidth: "0px 0px 1px 2px",borderRadius: "40px 0px 0px 40px"}} href={"#" + props.name}>{props.name}</a>
<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,5))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(5,10))}
</div>

</div>;

}

export default Post;