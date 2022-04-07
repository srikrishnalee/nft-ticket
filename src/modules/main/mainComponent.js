import React, { useState } from "react";

import HeaderBar from "../header";
import GeneralSettingsSection from "../generalSettings";


function MainComponent(){
    return (
        <div className="global-container flex justify-center">
            <div className="max-width-1640px">
                <>
                <HeaderBar/>
                <GeneralSettingsSection/>
                </>

            </div>
        </div>
    )
}

export default MainComponent;
