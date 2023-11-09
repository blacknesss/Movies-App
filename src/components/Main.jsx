import stars from '../assets/Group 2.svg';
import play from '../assets/Polygon 1.svg';
import CA from '../assets/Rectangle 6.svg';
import SW from '../assets/Rectangle 7.svg';
import SM from '../assets/Rectangle 12.svg';
import SWTLJ from '../assets/Rectangle 9.svg';
import U from '../assets/Rectangle 8.svg';
import A from '../assets/Rectangle 11.svg';
import arr from '../assets/ic_round-navigate-next.svg';

function Main({lInvisible}) {
    let offset = 0;
    
    const slider = () =>{
        const containerF = document.querySelector('.Double');
        const PM = document.querySelector('.PM');
            if (offset < 300){
                offset +=300;
                containerF.style.display = 'none';
                PM.style.visibility = 'visible';
            }
            else{
                offset = 0;
                PM.style.visibility = 'hidden';
                containerF.style.display = 'flex';
            }
            
        
        containerF.style.top = `${offset}px`;
    }

    

    return ( 
        <div className="main">
            <div className='main__contentblock'>
                <h1 onClick={lInvisible} className='name'>STAR WARS</h1>
                <h2 className='name fc50'>THE RISE OF SKYWALKER</h2>
                <p id='description'>The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.</p>
                <a className='stars' href="#"><img className='stars' src={stars} alt="err"/></a>
            </div>
            <div className='main__underblock'>
                <div className='WN'>
                    <img src={play} alt="err" />
                    <a href="#"><span className='WatchNow'>Watch Now</span></a>
                </div>
                
                <a href="#"><span className='Trailer'>Trailer</span></a>
            </div>
            <div className="main__lastblock">
                <h1 className='PM-text'>Popular Movies</h1>
                <div className='df'>
                    <div className='PM'>
                        <img className='CA sw' src={CA} alt="#" />
                        <img className='CA sw' src={SW} alt="#" />
                        <img className='CA sw' src={SM} alt="#" />
                        <img className='CA sw' src={SWTLJ} alt="#" />
                        <img className='CA sw' src={U} alt="#" />
                        <img className='CA sw' src={A} alt="#" />

                        <div className='PM Double'>
                            <img className='CA sw' src={SW} alt="#" />
                            <img className='CA sw' src={SM} alt="#" />
                            <img className='CA sw' src={SWTLJ} alt="#" />
                            <img className='CA sw' src={U} alt="#" />
                            <img className='CA sw' src={A} alt="#" />
                            <img className='CA sw' src={CA} alt="#" />
                        </div>
                    </div>
                    <div onClick={slider} className="arrow">
                        <img src={arr} alt="#" />
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Main;