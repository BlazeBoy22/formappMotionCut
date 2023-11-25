
import React from "react";
import { useState } from "react";

export default function Forms({createEmployee}){
    const [formData,setFormData]=useState({package:"silver",isSelected:false,USN:""});
  // console.log(formData);
  // console.log("prevData is ",formData.isSelected);
  function formHandler(event){
      const {name,type,checked,value} = event.target;
      setFormData((prevData)=>({
        ...prevData,[name]:type==="checkbox"?checked:value,USN:formData.isSelected   ?( name==='USN'? value:prevData.USN ):'',
      }));
  }
  function submitHandler( event)
  {
    event.preventDefault();
    createEmployee(formData);
    console.log(formData);
  }
    return(
        <div className='w-[50%] text-white bg-black bg-opacity-70 rounded-lg m-[1%]  pt-[3%] pl-[3%] pr-[3%] text-[1rem] text-center'>
            <h1 className="text-2xl text-cyan-400 scale-110 underline mb-[1%]">Trekking membership</h1>
            <form  onSubmit={submitHandler} className='text-center  '>
            <label htmlFor='firstName' >First Name </label>
            <br></br>
              <input type='text' id='firstName' name='firstName' onChange={formHandler}
              className='border-2 border-black rounded-lg pl-2 pr-2 bg-transparent mb-[2%]  w-[75%] '
               placeholder='rishabh'></input>
               <br></br>
               <label htmlFor='lastName' >Last Name </label>
            <br></br>
              <input type='text' id='lastName' name='lastName' onChange={formHandler}
              className='border-2 border-black rounded-lg pl-2 pr-2 bg-transparent mb-[2%] w-[75%]'
               placeholder='shandilya'></input>
               <br></br>
               <label htmlFor='mail' >Email id: </label>
            <br></br>
              <input type='email' id='mail' name='mail' onChange={formHandler}
              className='border-2 border-black rounded-lg pl-2 pr-2 bg-transparent mb-[2%] w-[75%]' 
               placeholder='r*******@gmail.com'></input>
               <br></br>
               <label htmlFor='country'>
                  Country
                  <br></br>
                  <select name='country' id='country' onChange={formHandler} className='border-2 border-black rounded-lg bg-transparent mb-[2%] w-[75%]'>
                      <option className='text-black bg-green-300'>India</option>
                      <option className='text-black bg-green-300'>Australia</option>
                      <option className='text-black bg-green-300'>England</option>
                      <option className='text-black bg-green-300'>Jupiter</option>
                  </select>
               </label>
               <br></br>
               <label htmlFor='password'>
                  Password
               </label>
               <br></br>
               <input id='password' name='password' type='password' placeholder='*********' onChange={formHandler} className='border-black border-2 bg-transparent rounded-lg pl-2 pr-2 mb-[2%] w-[75%]'></input>
               <br></br>
               <label htmlFor='package'>Trekking package</label>
               <br></br>
               <input type='radio' name='package' id='package1' onChange={formHandler} checked={formData.package==="silver"} value='silver'></input>
               <label htmlFor='package1'>Silver membership</label>
               <br></br>
               <input type='radio' name='package' id='package2' onChange={formHandler} checked={formData.package==="gold"} value='gold'></input>
               <label htmlFor='package2'>Gold membership</label>
               <br></br>
               <input type='radio' name='package' id='package3' value='platinum' checked={formData.package==="platinum"} onChange={formHandler} className='mb-[2%]'></input>
               <label htmlFor='package3'>Platinum membership</label>

               <fieldset className='border-2 border-black p-3 mt-[2%] rounded-lg  ' >
                  <legend className='border-2 border-black'>
                    Student:
                  </legend>
                  <label htmlFor='yes'>Yes</label>
                  <input type='checkbox' name='isSelected' id='box1' value={formData.isSelected} onChange={formHandler} checked={formData.isSelected}></input>
                  {
                   formData.isSelected?
                   (<>
                   <br></br>
                   <label htmlFor='USN'>USN:</label>
                   <br></br>
                   
                  <input type='text' name='USN' id='USN'   onChange={formHandler}   className='border-2 border-black rounded-lg bg-transparent pl-2 pr-2 w-[75%]'></input>
                   
                  </>):null
                  }
               </fieldset>
               <br></br>
               <label htmlFor='package1'  className='mt-[4%]' >DOB:</label>
               <br></br>
               <input type='date' name='birthdate' id='birthdate' onChange={formHandler}  className='border-2 border-black pl-2 pr-2 bg-transparent'></input>
               <br></br>

               <button className="mt-[2%] bg-cyan-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Submit</button>
                
 
 
            </form>
            </div>
        )
}