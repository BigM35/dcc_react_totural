import React, { useState } from 'react';


const AddEntryForm = (props) => {
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            Weight: weight,
            Date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Weight</label>
            <input type= "number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type='date' Value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>ADD</button>
        </form>
     );
}
 
export default AddEntryForm;