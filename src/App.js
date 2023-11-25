import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import image from "./images/ten.jpeg"
import Forms from './Components/Forms';
import Complete from './Components/Complete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 

function App() {
  
  const [checkSubmission,setSubmission] =useState(true);
  const showToastMessage = () => {
    toast.success("Submitted Successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const showToastMessage1 = () => {
    toast.error("form not filled !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const createEmployee = async (formData) => {
      
    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      }
    );
    
    setSubmission(false);
      if(!(savedUserResponse.status===400))
      {
        console.log("yes");
         showToastMessage();
         
      }
      else{
        setSubmission(true);
        showToastMessage1();
      }
      
    console.log(formData);
    console.log("FORM RESPONSE......", savedUserResponse);

    
  };
  
  return (
     <div className='min-h-[100vh] min-w-[100vw] relative   flex items-center justify-center bg-hero-pattern bg-no-repeat bg- bg-cover bg-center bg-fixed overflow-hidden'>
           
            {checkSubmission && <Forms createEmployee={createEmployee}></Forms>}
            <ToastContainer />
            {!checkSubmission && <Complete></Complete> }
            {/* <div className='w-[50%]  '>
                <img className='w-[100%] h-[100%]' src={image} alt ='form_image' ></img>
            </div> */}
     </div>
  );
}

export default App;
