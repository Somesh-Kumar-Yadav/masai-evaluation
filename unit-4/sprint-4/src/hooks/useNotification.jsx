import React from "react";

export default function useNotification() {
    const [success, setSuccess] = React.useState(false);
    function setNot() {
        
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        },[3000])
    }
    
    return [success,setNot]
}