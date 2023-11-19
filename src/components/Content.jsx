import React from 'react';

function Content({wishlist}) {
    console.log(wishlist);
    
    return ( 
        <div className='Content'>
            {wishlist.map(movie =>(
                <img key={movie ? movie[0].id : ''} className='poster' src={movie&&movie[0]&&movie[0].logo ? movie[0].logo.url : 'err'} alt="#" />
                // блок content должен быть внутри мапа, доделать этот момент, потом доделать все остальное
            ))}
            

        </div>
     );
}

export default Content;