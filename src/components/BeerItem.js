import { Link } from 'react-router-dom';

const BeerItem = (props) => {
    return (
        <article>
            <div>
                <img src={props.image_url} alt="" />
            </div>
            <div>
                <h1>{props.name}</h1>
                <h4>{props.tagline}</h4>
                <p>Created by: {props.name}</p>
                <Link className="button" to={`/item/${props._id}`} state={props.beers}>Details</Link>
            </div>
        </article>
    );
}

export default BeerItem;