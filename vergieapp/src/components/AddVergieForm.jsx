import React, {useState} from "react";


const AddVergieForm = ({addVergie}) => {
    const [vergieName, setVergieName] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(vergieName){
            addVergie(vergieName);
            setVergieName('');
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={vergieName}
            onChange={(e) => setVergieName(e.target.value)}
            placeholder="Enter Vergie Name" />
            <button type="submit">Add Vergie</button>
        </form>
    );

};
export default AddVergieForm;

