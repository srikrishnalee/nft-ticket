
import React, {useState} from 'react'

function CategoryPopup(){
    const [modal,setModal] = useState(true);

    const toggleModal = () =>{
        setModal(!modal)
    }
    return(
        <>
        <div>
        <button className='items-center' onClick={toggleModal}>
        open
        </button>

        
        </div>
        {modal && (
            <div>
            <div className='bg-darkBrown-50 fixed w-100 h-40 top-20 left-0 right-0 bottom-0'>
                <div className='shadow-md border-2  rounded-md h-40'>
                    <h1>Lorerum knnhhdfdshfsdhfskjdhf cdgfuhsdjbndjgbfdksnfdskjfmnbjudshuisdnfd giudhfduknfkdfhbfh   </h1>
                    <button onClick = {toggleModal}>Close</button>

                </div>
            </div>
        </div>
            
        )}
        -
        </>
    )

}

// function CategoryPopup(){
//     const [modal,setModal] = useState(true)
//     const toggleModal = () =>{
//         setModal(!modal)

//     }
//     return(
//         <>
//         {
//             modal && (
//                 <div className='w-167.5 h-65.5  shadow-md bg-white-50 border-1 ml-177.2 mt-27.5 flex flex-col absolute'>
//         <div className='pl-7.5'>
//             <div className='flex flex-row items-center'>
//             <h1 className='text-ft2 font-PoppinsSemiBold text-darkGrey-50 text-left  pt-7.5'>Add Category</h1>
//            <button className='' onClick={toggleModal}>
//            <i className="fa-solid fa-xmark ml-103.7"></i>
//            </button>
//             </div>
//             <div>
//                 <form>
//                 <div className="flex flex-col mt-5">
//                     <label for="fname" className="text-ft4 text-darkGrey-50 font-PoppinsMedium pd-3">Category name </label>
//                     <div className='flex flex-row items-center'>
//                     <input type="text" id="fname" placeholder="Enter category name"  className="border-darkwhite-300 rounded-md w-103.7 h-10  border-2  border-white-300 mt-3 " ></input>
//                     <button><i className="fa-solid fa-plus border-1 rounded ml-10 mt-4 border-2 border-darkBlue-150  "></i></button>

//                     </div>
//                     </div>
//                     <button className='bg-darkBlue-250 text-white-50 w-29 h-10 mt-10 ml-103.7'> Save</button>
//                 </form>
//             </div>
               
//         </div>

//     </div>
//             )
//         }
//         </>
//     )

// }
  
 

export default CategoryPopup