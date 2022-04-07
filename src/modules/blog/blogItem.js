import React,{useState} from "react";
import BaseComponent from "../baseComponent";
import TabItem from "./TabItem";
import Projectitem from "./projectItem";
import ProjectItem1 from "./projectItem1";
import CategoryPopup from "./categoryPopup";
import { Route } from "react-router";


const tabList = [
    {tabId:'POST',displayText:'Post'},
    {tabId:"CATEGORIES",displayText:"Categories"}
]


const projectList = [
    {
        projectId:0,
        category:"POST",
        Blogname:'what are NFTS',
        Date:"21/01/22",
        Status:"Posted",

    },
    {
        projectId:1,
        category:"POST",
        Blogname:'what are NFTS',
        Date:"21/01/22",
        Status:"Posted",

    },
    {
        projectId:2,
        category:"POST",
        Blogname:'what are NFTS',
        Date:"21/01/22",
        Status:"Posted",

    },
    
]

const projectList1 = [
    {
        projectId:3,
        category:"CATEGORIES",
        Name:"Technology",
        Date:"21/02/22",
        
    },
    {
        projectId:4,
        category:"CATEGORIES",
        Name:"Crypto",
        Date:"21/02/22",
        
    },
    {
        projectId:5,
        category:"CATEGORIES",
        Name:"Accessibility",
        Date:"21/02/22",
        
    }
    
    
]

class BlogItem extends BaseComponent{


    state = {
        activeTabId: tabList[0].tabId
    }

    clickTabItem= (tabValue) =>{
        this.setState({activeTabId:tabValue})
    }

    getFilterProjects= () =>{
        const {activeTabId} = this.state
        const filteredProjects = projectList.filter((each)=>(
            each.category === activeTabId
        ))
        return filteredProjects
    }

    getFilterProjects1 = () =>{
        const {activeTabId} = this.state
        const filteredProjects1 = projectList1.filter((each)=>(
            each.category === activeTabId
        ))

        return filteredProjects1
    }

    onClickedBlog = () =>{
        // window.location.href="/nftticketing-webapp/src/modules/blog/addBlog.js"
        window.location.href="/Add"
    }

    onClickedCategory = () =>{
        window.location.href="/pop"
     

        
    }
      
      

    render(){
        const {activeTabId} = this.state
        const filteredProjects = this.getFilterProjects()
        const filteredProjects1 = this.getFilterProjects1()
    return (
        
        
        <div className="pt-19.5 pl-87.2">
            <div className="flex flex-row">
            <h1 className="text-ft3 font-PoppinsBold text-left text-darkGrey-50 pr-198.7">Blog</h1>
            <button className="rounded-md bg-darkBlue-150 text-white-50 w-28.7 h-10 " onClick={this.onClickedBlog}>Add Blog</button>
            <button className="rounded-md bg-darkBlue-150 text-white-50 w-28.7 h-10 ml-2" onClick={this.onClickedCategory}>Add Categoty</button>
            </div>
             <ul className="flex flex-row pt-5.5">
                {tabList.map((tabDetails)=>(
                    <TabItem key={tabDetails.tabId} tabDetails={tabDetails} clickTabItem = {this.clickTabItem} isActive = {activeTabId === tabDetails.tabId}/>
                ))}
            </ul>
            <ul>
                <div className="flex flex-row pt-14">
                    <h1 className="text-ft9 font-PoppinsMedium text-left text-darkGrey-50">Blog name</h1>
                    <p1 className="text-ft9 font-PoppinsMedium text-left text-darkGrey-50 pl-54.7">Date</p1>
                    <p1 className="text-ft9 font-PoppinsMedium text-left text-darkGrey-50 pl-54.7">Status</p1>
                    

                </div>
                {filteredProjects.map((projectDetails)=>(
                    <Projectitem key={projectDetails.projectId} projectDetails={projectDetails}/>
                ))}
                
            </ul> 

            <ul>
                {/* <div className="flex flex-row ">
                    <h1 className="text-ft9 font-PoppinsMedium text-left text-darkGrey-50">Name</h1>

                    <h2 className="text-ft9 font-PoppinsMedium text-left text-darkGrey-50 pl-102.5">Date</h2>
                    </div> */}
                    {
                        filteredProjects1.map((details)=>(
                            <ProjectItem1 key={details.projectId} details = {details} />

                        ))
                    }
                
            </ul>

        </div>
    )
                }
}

export default BlogItem