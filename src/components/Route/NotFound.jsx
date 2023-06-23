import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
  const  Navigate= useNavigate()

  useEffect(() => {
    Navigate('/NotFound')
  }, [Navigate])

  return(
    <div><p>oooooppps an error occured 404</p></div>
  )


};

export default NotFound;