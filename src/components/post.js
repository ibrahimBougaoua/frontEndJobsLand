import React from "react";
import { Link } from "react-router-dom";

function Post(props){
const listItems = (elements) => { 
    return ( elements.map((element) => 
    <div className="card card-home mb-3">
      <div class="card-body">
        <h5 class="card-title">{element[3]}</h5>
        <p class="card-text">{element[0]}</p>
        <Link to={props.link + element[0]} className="btn btn-primary">More</Link>
      </div>
    
    </div>
));
}

return <div>

<div className="container">
<p className=" text-sm-left">{props.name}</p>
<div className="col-md-12 mb-5">

<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,5))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(5,10))}
</div>

</div>
</div>

</div>;

}

export default Post;