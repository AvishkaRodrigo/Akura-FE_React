import { useNavigate } from 'react-router-dom';

let navigate; 


const Utils = () => {
    navigate = useNavigate();
    
    const redirectAfterComplete  = (route) => {
        setTimeout(() => {
            console.log("done")
            navigate(route)
        },5000)
    }
    
    
}

export default Utils;
