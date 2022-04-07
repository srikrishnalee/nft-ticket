import React from 'react'


function AddBlogs(){
    return (
        <div className='pt-19 pl-87.2'>
            <div className='flex flex-row items-center'>
            <i className ="fa-solid fa-arrow-left-long"></i>
                <h1 className='text-ft3 font-PoppinsBold text-left text-darkGrey-50 pl-4'>Add Blog</h1>
            </div>
            <div >
                <form className='flex flex-col'>
                <label for="fname" className='text-ft4 text-left text-darkGrey-50 font-PoppinsMedium pt-5'>Post Title*</label>
                <input type="text" id="fname" name="fname" className='border-2 border-white-300 bg-white-50 rounded-md w-240 h-10 mt-2.3'></input>
                <div className='flex  pt-2.7'>
                <div>
                <label for="cars" className='text-ft4 font-PoppinsMedium text-left text-darkGrey-50 flex flex-col pb-2.2'>category</label>
                    <select name="cars" className='border-2 w-75.5 h-10 rounded-md border-white-300 bg-white-50' id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='pl-10'>
                <label for="cars" className='text-ft4 text-left text-darkGrey-50 font flex flex-col font-PoppinsMedium pb-2.2'>Status</label>

                    <select name="cars" className='border-2 w-75.5 h-10 rounded-md border-white-300 bg-white-50' id="cars">
                    <option value="volvo">Draft</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select>
                </div>
                </div>
                <div>
                    <h1 className='text-ft4 font-PoppinsBold text-left text-darkGrey-50 pt-5'>Content*</h1>
                    <div className='w-240 h-122 rounded-md bg-white-50 border-white-300 border-2 mt-2.3'>
                        <div className='flex gap-6 pt-7.5 pl-3'>
                        <i className="fa-solid fa-h"></i>
                        <i className="fa-solid fa-b"></i>
                        <i className="fa-solid fa-i"></i>
                        <i className="fa-solid fa-s"></i>
                        <i className="fa-solid fa-list"></i>
                        <i className="fa-solid fa-list"></i>
                        <i className="fa-solid fa-link"></i>
                        <i className="fa-solid fa-paperclip"></i>
                        
                       

                        </div>
                        <div className='flex flex-col mt-10 ml-4'>
                        <h1 className='text-ft10 font-PoppinsRegular text-left text-darkbrown200'>Start writing blog</h1>
                        </div>
                        
                    </div>

                    
                </div>
                <div className=''>
                    <button className='rounded-md bg-darkBlue-150 w-28.7 h-10 text-white-50   font-PoppinsSemiBold pl-220 mt-5'>Save</button>
                </div>
               
                </form>
                
            </div>
        </div>

    )
}

export default AddBlogs