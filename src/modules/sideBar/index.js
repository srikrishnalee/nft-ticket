import React from "react";
import BaseComponent from "../baseComponent";
import SideBar from "./sideBar";


class SideBarSection extends BaseComponent{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <SideBar/>


        )
    }
}

export default  SideBarSection