import React,{useEffect, useState} from "react";
import api from  "../api";
import AddVergieForm from "./AddVergieForm";

const VergieList = () =>{
    const [vergies, setVergies] = useState([]);

    const fetchVergies = async () => {
        try {
            const response = await api.get('/vergies');
            setVergies(response.data.vergies);

        } catch (error) {
            console.error("Error fetching vergies: ", error);
        }
    };



    const addVergie = async(vergieName) =>{
        try {
            await api.post('/vergies', {name: vergieName});
            fetchVergies(); //refresh the list after adding
        } catch (error) {
            console.error("Error while adding vergie: ", error);
        }
    };

    useEffect( () =>{ 
        fetchVergies();
    }, []);

    return(
        <div>
            <h3>Vergie and Fruit List </h3>
            <ul>
                {vergies.map((vergie, index) =>(
                    <li key={index}>{vergie.name}</li>
                ))}
            </ul>
            <AddVergieForm addVergie={addVergie} />
        </div>
    );
};
export default VergieList;