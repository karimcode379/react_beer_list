import { NavLink } from 'react-router-dom';
import randombeer from './../assets/img/randombeer.png';
import allbeers from './../assets/img/allbeers.png';

const Home = () => {


    return (
        <section>
            <div>
                <NavLink to="/allbeers">
                    <img src={allbeers} alt="" />
                    <h2>All Beers</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolor cupiditate quia beatae nihil autem.</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/randombeer">
                    <img src={randombeer} alt="" />
                    <h2>Random Beer</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolor cupiditate quia beatae nihil autem.</p>
                </NavLink>
            </div>
        </section >
    );
}

export default Home;