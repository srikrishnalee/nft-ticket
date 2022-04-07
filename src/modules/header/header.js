import React, { useState } from "react";








        


function Header(){
    

    return (
        <div className="w-480 h-17.5 bg-white-50   shadow-md flex ">
            <div>
                <h1 className=" text-ft8 text-darkBlue-150 text-left  pl-11 pt-4.7 pd-6 pr-393.2 font-whiskeygirlscond">NFTFI</h1>
            </div>
            <div className="pt-4.7 pd-4.7">
            <button className="text-darkGrey-150" type="button">
            <i className="fa-solid fa-user  w-7.8 h-7.8"></i>
            </button>
            <button className="text-darkGrey-150" type="button" >
            <i className="fa-solid fa-wallet w-7.8 h-7.8"></i>
            </button>
            <button className="text-darkGrey-150" type="button">
            <i className="fa-solid fa-bell w-7.8 h-7.8"></i>
            </button>
            
            </div>
            
            
        </div>
    
    )
}

export default Header;
