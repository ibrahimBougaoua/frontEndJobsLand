import React from "react";
import { Link } from "react-router-dom";

function Post(props){
const listItems = (elements) => { 
    return ( elements.map((element) => 
<div className="card border-0 mr-2 shadow-sm mb-3 bg-white rounded">
  <div className="card-body">
    <h6 className="card-subtitle mb-3 text-dark w-100">{ element[5].length < 50 ? element[5] : element[5].substring(0, 50) + '...' }</h6>
    <p className="card-subtitle mb-3 text-muted w-100">company : { element[2].length < 15 ? element[2] : element[2].substring(0, 15) + '...' }</p>
    <p className="card-subtitle mb-3 text-muted">published : {element[1]}</p>
    <Link to={props.link + element[10]} className="btn btn-sm btn-outline-info">Read more</Link>
  </div>
</div>
));
}

return <div className="col-md-12 mb-5">
<a className="navbar-brand text-sm-left text-info mb-3" style={{padding: "0px 0px 2px 16px",borderStyle: "solid",borderWidth: "0px 0px 1px 2px",borderRadius: "40px 0px 0px 40px"}} href={"#" + props.name}>{props.name}</a>
<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,4))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(4,8))}
</div>

</div>;

}

export default Post;