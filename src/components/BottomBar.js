import beer_icon from './../assets/img/beer_icon.png'
import { Link } from 'react-router-dom';


const BottomBar = () => {
    return (
        <div className="bottomBar">
            <div>
                <Link className="button" to="/home"><img src={beer_icon} alt="" /></Link>
            </div>
        </div>
    );
}

export default BottomBar;