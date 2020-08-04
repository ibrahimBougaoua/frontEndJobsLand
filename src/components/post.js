import React from "react";
import { Link } from "react-router-dom";

function Post(props){
const listItems = (elements) => { 
    return ( elements.map((element) => 
    <div className="card card-home mb-3">
      <div class="card-body">
        <h6 class="card-title text-sm">{element[1]}</h6>
        <p class="text-sm text-muted">{element[0]}</p>
        <Link to={props.link + element[0]} className="btn btn-sm btn-info">More</Link>
      </div>
    
    </div>
));
}

return <div className="container">


<div className="col-md-12 mb-5">
<p className=" text-sm-left">{props.name}</p>
<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,5))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(5,10))}
</div>

</div>
</div>;

}

export default Post;