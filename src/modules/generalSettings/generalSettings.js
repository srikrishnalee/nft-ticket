import React from "react";
import SideBarSection from "../sideBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'


function GeneralSettings() {
    return (
        <div className="flex flex-row">
            <SideBarSection/>
            {/* this section is for general settings */}
            <div className="pt-19 pl-123.2">
                <div className="flex flex-col">
                    <h1 className="text-ft3 font-PoppinsBold text-left text-darkGrey-50">General settings</h1>
                    <p1 className="text-ft2 font-PoppinsSemiBold text-left text-darkGrey-50 pt-4.2" >Name and logo</p1>
                    <p2 className="text-ft4 font-PoppinsMedium text-left text-darkGrey-50 pt-2.7">Upload logo</p2>
                    {/* code for upload section */}
                    <div className="pt-5.2">
                    <div className="border-dotted w-58 h-58 border-white-300 border-2 rounded-xl text-center">
                        <FontAwesomeIcon icon={faCloudArrowUp} className="w-17.6 h-12.3 pt-18.2"></FontAwesomeIcon>

                        <h1 className="text-ft10 text-left font-PoppinsRegular pt-4.2 pl-8.2">Drag and Drop or <span className="text-darkBlue-150"> Browse</span> </h1>

                    </div>
                    <p1 className="text-ft7 text-darkGrey-50 text-left font-PoppinsRegular ">upload logo in .svg or .png format size 136X40px</p1>
                    </div>
                    <div className="pt-8 ">
                       <form className="">
                           <div className="flex flex-col">
                           <label for="fname" className="text-ft4 text-darkGrey-50 font-PoppinsMedium pd-3">Name of store </label>
                           <input type="text" id="fname" placeholder="Write name of the store"  className="border-darkwhite-300 rounded-md w-129 h-10 border-2 mt-3 " ></input>
                           </div>
                           <div className="flex flex-col pt-8">
                           <label for="fname" className="text-ft4 text-darkGrey-50 font-PoppinsMedium pd-3">Store Fees </label>
                           <div className="flex">
                           <input type="text" id="fname" placeholder="Enter store Fee"  className="border-darkwhite-300 rounded-md border-2 mt-3 w-129 h-10 " ></input>
                           <p className="shadow-md  text-darkBlue-200 text-center h-9.5 w-14.5 pt-2">%</p>

                           </div>
                           <p1 className="text-ft7 text-darkGrey-50 text-left font-PoppinsRegular pt-3 ">Revenue percentage to be shared with this store</p1>   
                           </div>
                           <div className="flex flex-col pt-8">
                           <label for="fname" className="text-ft4 text-darkGrey-50 font-PoppinsMedium pd-3">Store Wallet </label>
                           <input type="text" id="fname" placeholder="0x74F3ae13bE4bB88c87764211d621d32DCC7f533E"  className="border-darkwhite-300 rounded-md w-129 h-10 border-2  mt-3 text-darkBlue-50" ></input>
                           <p1 className="text-ft7 text-darkGrey-50 text-left font-PoppinsRegular pt-3">Store Fees will be connected from this wallet</p1>   
                           </div>

                           {/* code for social media collection */}
                           <div className=" pt-8">
                               <div>
                                   <h1 className="text-ft2 text-darkGrey-50 font-PoppinsSemiBold text-left">Social media Connection</h1>
                               </div>
                               <div className="flex flex-col pt-5.5">
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pr-103.7 ">Instagram</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
            
                                   </div>
                                   <div className="flex justify-evenly ">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7">Twitter</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7">Telegram</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5 " type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7">Facebook</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7"> LinkedIn</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7">Discord</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                                   <div className="flex justify-evenly">
                                       <h1 className="text-ft5 font-PoppinsMedium text-left text-darkBrown-50 pt-5.5 pr-103.7">Youtube</h1>
                                       <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm mt-5" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                   </div>
                               </div>
                           </div>
                           <button className="bg-darkBlue-150 rounded-md text-ft4 w-43.2 h-10 text-white-50  mt-11 ml-60">Save</button>
                           
                       </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GeneralSettings