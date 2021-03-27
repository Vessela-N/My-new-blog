import food from './Abdoogh-khiar-1.jpg';
import './Banner.css';

const Banner = () => {
    return ( 
        <section className="banner">
            <img src={food} alt="persian food banner"/>
        </section>
     );
}
 
export default Banner;