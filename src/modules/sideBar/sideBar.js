import React  from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStore,faBars,faGear,faTShirt,faBridgeLock,faSheetPlastic,faAtom,faUser, faWindowRestore,} from '@fortawesome/free-solid-svg-icons'

function SideBar(){

    function onClickBlog(){
        window.location.href="/blog"
    }
    
    function onClickGeneral(){
        window.location.href="/"
        
    }
    
    return(
        <div className="w-66.2 h-348 bg-darkBlue-200 ">
            {/* code for my store */}
            <div>
                <div className="rounded-md pt-22.5 px-3.5">
                   <div className="bg-darkGrey-150 rounded-2xl w-59.2 h-15.2 flex justify-center ">
                       <FontAwesomeIcon icon={faStore} className="w-5.5 h-5 py-4.7"></FontAwesomeIcon>
                       <h1 className="text-ft9 text-darkBlue-50 text-left font-PoppinsSemiBold pl-4.2 py-4.7">My store</h1>
                   </div>
                </div>
            </div>
            {/* code for general settings */}
            <div className="pt-4 flex pl-8.6">
               <button className="" onClick={onClickGeneral}><i className="fa-solid fa-list"></i></button>
                <h1 className="text-darkBlue-50 text-ft10 text-left font-PoppinsSemiBold pl-4">General settings</h1>
            </div>

            {/* code for advanced settings */}
            <div className="flex  pl-8.6 pt-5.2">
                <FontAwesomeIcon icon={faGear} className="w-4.5 h-4.5 "></FontAwesomeIcon>
                <h1 className="text-darkGrey-200 text-ft10 text-left font-PoppinsSemiBold pl-4">Advanced settings</h1>
                
            </div>

            {/* apperance code */}
            <div className="flex pt-5.2 pl-8.6">
                <FontAwesomeIcon icon={faTShirt} className="w-4.5 h-4.5 "></FontAwesomeIcon>
                <h1 className="text-darkGrey-200 text-ft10 text-left font-PoppinsSemiBold pl-4">Apperance</h1>
                
            </div>

            {/* blog code */}
            <div className="flex pt-5.2 pl-8.6 text-darkGrey-200 ">
                <button onClick={onClickBlog}><i className="a-solid fa-blog "></i></button>
                <h1 className="text-darkGrey-200 text-ft10 text-left font-PoppinsSemiBold pl-4">Blog</h1>

            </div>

            {/* billing code */}
            <div className="flex pt-5.2 pl-8.6">
                <FontAwesomeIcon icon={faSheetPlastic} className="w-4.5 h-4.5"></FontAwesomeIcon>
                <h1 className="text-darkGrey-200 text-ft10 text-left font-PoppinsSemiBold pl-4 ">billing</h1>
            </div>

            {/* my items code */}
            <div>
                <div className="rounded-md pt-22.5 pl-0">
                   <div className="bg-darkBlue-200 rounded-xl w-59.2 h-15.2 flex justify-center ">
                       <FontAwesomeIcon icon={faAtom} className="w-5.5 h-5 py-4.7"></FontAwesomeIcon>
                       <h1 className="text-ft11 text-darkGrey-200 text-left font-PoppinsRegular pl-4.2 py-4.7">My store</h1>
                   </div>
                </div>
            </div>

            <div>
                <div className="rounded-md  pt-5.2 pl-0">
                   <div className="bg-darkBlue-200 rounded-xl w-59.2 h-15.2 flex justify-center ">
                       <FontAwesomeIcon icon={faUser} className="w-5.5 h-5 py-4.7"></FontAwesomeIcon>
                       <h1 className="text-ft11 text-darkGrey-200 text-left font-PoppinsRegular pl-4.2 py-4.7">My Account</h1>
                   </div>
                </div>
            </div>

            <div>
                <div className="rounded-md  pt-5.2 pl-0">
                   <div className="bg-darkBlue-200 rounded-xl w-59.2 h-15.2 flex justify-center ">
                       <FontAwesomeIcon icon={faUser} className="w-5.5 h-5 py-4.7"></FontAwesomeIcon>
                       <h1 className="text-ft11 text-darkGrey-200 text-left font-PoppinsRegular pl-4.2 py-4.7">Dashboard</h1>
                   </div>
                </div>
            </div>

            <div>
                <div className="rounded-md  pt-5.2 pl-0">
                   <div className="bg-darkBlue-200 rounded-xl w-59.2 h-15.2 flex justify-center ">
                       <FontAwesomeIcon icon={faUser} className="w-5.5 h-5 py-4.7"></FontAwesomeIcon>
                       <h1 className="text-ft11 text-darkGrey-200 text-left font-PoppinsRegular pl-4.2 py-4.7">Manage Account</h1>
                   </div>
                </div>
            </div>








        </div>
    )

}

export default SideBar