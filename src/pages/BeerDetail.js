import { useParams, useLocation, Link } from 'react-router-dom';
import arrow from './../assets/img/arrow.png'

const BeerDetail = () => {
    let { _id } = useParams();
    const location = useLocation();
    let data = location.state;

    let detail = data.filter((elt) => {
        return elt._id.toString() === _id.toString();
    })

    return (
        <article class="detailBeer">
            <div>
                <img src={detail[0].image_url} alt="" />
            </div>
            <h1>{detail[0].name}</h1>
            <h4>{detail[0].tagline}</h4>
            <div className="greyDetails">
                <div>First brewed:</div>
                <div>{detail[0].first_brewed}</div>
            </div>
            <div className="greyDetails">
                <div>Attenuation level:</div>
                <div>{detail[0].attenuation_level}</div>
            </div>
            <p>{detail[0].description}</p>
            <Link className="button" to="/allbeers"><img src={arrow} /></Link>

        </article>
    );
}

export default BeerDetail;