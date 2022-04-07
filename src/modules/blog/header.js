import React from "react";


import Header from "../header/header";
import SideBarSection from "../sideBar";
import BlogItem from "./blogItem";


function HeaderBlog(){
    return(
        <>
        <Header/>
        <div className="flex">
            <SideBarSection/>
            <BlogItem/>

            

        </div>
        </>
        
        
    )

}

export default HeaderBlog