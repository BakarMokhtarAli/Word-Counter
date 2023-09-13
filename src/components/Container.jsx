import React, { useState } from 'react'

export const Container = () => {

    const [ value, setValue ] = useState("")
    const word = value.trim().split(" ")
    const handleClear = () =>{
        setValue("")
    }

    // const allowed = `py-1 px-4 rounded-sm bg-red-500 text-white max-sm:my-4`;
    // const notAllowed = `py-1 px-4 rounded-sm bg-red-500 text-white max-sm:my-4 cursor-not-allowed`

    function handleValueChange (e){
        setValue(e.target.value)
    }

  return (
    <div className="w-3/4 m-auto mt-10 lg:w-1/2">
        <h2 className="text-center font-bold text-2xl py-2">Word Cunter</h2>
        <p className="text-center text-lg pb-2">Start typing your document to get list of most used keywords</p>
        <div>
            <textarea onChange={handleValueChange}  value={value} name="counter" id="" cols="30" placeholder='type text or paste your documents here' rows="10" className="w-full rounded-sm border outline-none p-2 focus:outline focus:outline-offset-0 focus:rounded-md focus:outline-blue-500"></textarea>
        </div>
        <div className="w-full flex flex-row justify-between items-start px-2
        max-sm:flex-col">
            <span className="py-3 px-4 mt-4 bg-blue-600 rounded-md text-white text-center">Characters: {value.length}</span>
            <button onClick={()=>handleClear(()=>setValue(""))} className={value.length === 0 ? "cursor-not-allowed py-2 px-6 rounded-sm bg-gray-300 text-black max-sm:my-4 " : "py-2 px-4 rounded-sm bg-red-500 text-white max-sm:my-4"}
            >Clear</button>
            <span id='word' className="py-3 mt-4 px-4 bg-blue-600 rounded-md text-white text-center">Word: {word.length -1}</span>
        </div>
    </div>
  )
}
