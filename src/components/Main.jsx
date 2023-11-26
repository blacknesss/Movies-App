import { useEffect, useState } from 'react';
import stars from '../assets/Group 2.svg';
import play from '../assets/Polygon 1.svg';
import arr from '../assets/ic_round-navigate-next.svg';
import { fetchPopularMovies } from '../services';
import Modal from './Modal';

function Main({data, changeBackground}) {
    const [PM, setPM]=useState([])
    const [datany, setDatany] = useState([])
    const [isActive, setIsActive]=useState(false)
    useEffect(() => {
        if(data && data.docs) {
            setDatany(data.docs);
        }
    }, [data]);

    useEffect(() => {
        fetchPopularMovies().then((result) => setPM(result.docs));
    }, []);
    

    if(datany && datany[0]){
        const fullName = datany[0].alternativeName;

        const parts = fullName.split(':');
        var part1 = parts[0].trim();
        var part2 = parts.slice(1).join(':').trim();
    }
    // slider
    const carousel = document.querySelector('.PM');
    
    
    let isDragStart = false, prevPageX, prevScrollLeft;

    const dragStart = (e) =>{
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }
    const dragStop = () =>{
        isDragStart = false;
    }

    const slider = () =>{
        carousel.scrollLeft += 206;
        if(carousel.scrollLeft === 399){
            carousel.scrollLeft = 0
        }
        changeBackground()
    }

    return ( 
        <div className="main">
            <div className='main__contentblock'>
                <h1  className='name'>{datany && datany[0] ? part1 : 'STAR WARS'}</h1>
                <h2 className='name fc50'>{datany && datany[0] ? part2 : 'The rise of somewhere'}</h2>
                <p id='description'>{datany && datany[0] && datany[0].description.length > 0 ? datany[0].description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequuntur, harum officia assumenda repellat numquam dolor cum aliquam sunt commodi quos excepturi provident corrupti aperiam vero minima rerum. Culpa, voluptas.'}</p>
                <a className='stars' href="#"><img className='stars' src={stars} alt="err"/></a>
            </div>
            <div className='main__underblock'>
                <div className='WN'>
                    <img src={play} alt="err" />
                    <a onClick={()=>setIsActive(true)} href="#"><span className='WatchNow'>Watch Now</span></a>
                </div>
                
                <a href="#"><span className='Trailer'>Trailer</span></a>
            </div>
            <div className="main__lastblock">
                <h1 className='PM-text'>Popular Movies</h1>
                <div className='wrapper-slider'>
                    <div onMouseUp={dragStop} onMouseDown={e => dragStart(e)} onMouseMove={e => dragging(e)} className='PM'>
                    { PM.map((item, index) => (
                        <img
                        id='img'
                        key={index}
                        className='CA'
                        src={item.poster.url}
                        alt="#"
                        onClick={() => changeBackground(item.poster.url)}
                        />
                    )) }    
                    </div>
                    <div onClick={slider} className="arrow">
                        <img src={arr} alt="#" />
                    </div>
                </div>
            </div>
            <Modal active={isActive} setActive={setIsActive}>
            <iframe style={{width: '100%', height: '400px'}} src="https://www.youtube.com/embed/jfKfPfyJRdk?si=7WGKQWkR93NfabT8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Modal>
        </div>
     );
}

export default Main;