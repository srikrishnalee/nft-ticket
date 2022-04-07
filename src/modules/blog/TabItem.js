const TabItem = (props) =>{
    const {tabDetails,clickTabItem} = props
    const {displayText,tabId} = tabDetails

   const  onClickTab = (event) =>{
        clickTabItem(tabId);
    }

    return (
        <li className="">
            <button type="button" className="hover:text-darkBlue-50 font-PoppinsSemiBold pr-13.2 hover:underline" onClick={onClickTab}>
                {displayText}
            </button>
            

        </li>
    )
}

export default TabItem