import stars from '../assets/Group 2.svg';
import play from '../assets/Polygon 1.svg';

function Main() {
    return ( 
        <div className="main">
            <div className='main__contentblock'>
                <h1 className='name'>STAR WARS</h1>
                <h2 className='name fc50'>THE RISE OF SKYWALKER</h2>
                <p id='description'>The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.</p>
                <a className='stars' href="#"><img src={stars} alt="err"/></a>
            </div>
            <div className='main__underblock'>
                <div className='WN'>
                    <img src={play} alt="err" />
                    <a href="#"><span className='WatchNow'>Watch Now</span></a>
                </div>
                
                <a href="#"><span className='Trailer'>Trailer</span></a>
            </div>
        </div>
     );
}

export default Main;