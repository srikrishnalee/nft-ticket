const ProjectItem1 = (props) =>{

    const {details} = props
    const {projectId,Name,Date} = details
    return (
        <>
         
         <li className="flex flex-row border-1 rounded-xl bg-white-400  w-240 h-12.5 pt-4 m-3  ">
         <h1 className="text-ft10 font-PoppinsMedium text-darkGrey-50 text-left pl-4 h-5 w-20">{Name}</h1>
            <p1 className="text-ft10 font-PoppinsMedium text-darkGrey-50 text-left pl-94.2">{Date}</p1>
            <h1 className="text-ft10 font-PoppinsMedium text-darkBlue-150 text-left pl-40">Edit</h1>
            <h1 className="text-ft10 font-PoppinsMedium text-red-50 text-left pl-36">Delete</h1>

         </li>
        </>
       
    )

}

export default ProjectItem1