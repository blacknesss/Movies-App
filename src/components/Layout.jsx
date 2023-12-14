import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({addToWishlist, isEnter}) {
    



    return ( 
        <>
        <div className="App">
            <Head />
            <Foot isEnter={isEnter} addToWishlist={addToWishlist}/>
        </div>
        </>
     );
}

export {Layout};