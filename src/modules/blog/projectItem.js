import ProjectItem1  from "./projectItem1"


const Projectitem = (props) =>{

    const {projectDetails} = props
    const {projectId,Blogname,Date,Status,} = projectDetails

    return(
        
        
        <>
        
        <li className="flex flex-row border-1 rounded-xl bg-white-400  w-240 h-12.5 pt-4 m-3 ">
            <h1 className="text-ft10 font-PoppinsMedium text-darkGrey-50 text-left pl-4">{Blogname}</h1>
            <p1 className="text-ft10 font-PoppinsMedium text-darkGrey-50 text-left pl-50">{Date}</p1>
            <h1 className="text-ft10 font-PoppinsMedium text-darkGrey-50 text-left pl-50">{Status}</h1>
            <h1 className="text-ft10 font-PoppinsMedium text-darkBlue-150 text-left pl-20">Edit</h1>
            <h1 className="text-ft10 font-PoppinsMedium text-red-50 text-left pl-28">Delete</h1>
        </li>
        
       
        
        </>
        
    )

}

export default Projectitem