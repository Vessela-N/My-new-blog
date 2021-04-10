import food from './bann1.jpg';
import './Banner.css';

const Banner = () => {
    return ( 
        <section className="banner">
            <img src={food} alt="pomegranates"/>
        </section>
     );
}
 
export default Banner;