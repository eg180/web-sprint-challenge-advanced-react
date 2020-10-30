// write your custom hook here to control your checkout form
import React, { useState } from "react";

export const useForm = (initialValue, secondInitialValue) => {

    const [values, setValues] = useState(initialValue)
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const toggleShowSuccess = (e) => {
        setShowSuccessMessage(false)
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage]



}