import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({addToWishlist, isEnter, addToTvShows}) {
    



    return ( 
        <>
        <div className="App">
            <Head />
            <Foot isEnter={isEnter} addToWishlist={addToWishlist} addToTvShows={addToTvShows}/>
        </div>
        </>
     );
}

export {Layout};