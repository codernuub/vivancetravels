import React,{useState} from 'react';
import FlightFormFieldSubSection from './FlightFormFieldSubSection';

export default function FlightFormFields() {

    const [flightType,setFlightType] = useState("one_way")

    //Function to update the type of flight
    const updateFlightType=(type) => {
        //update the state
        setFlightType(type)
        if(type!=="multi_city"){
            setCities([<FlightFormFieldSubSection flightType={flightType}></FlightFormFieldSubSection>])
        }

        //make the button active 
        const flightTypes = ["one_way","round_trip","multi_city"]
        flightTypes.map(item=>{
            document.getElementById(item).classList.remove("active")
        })
        document.getElementById(type).classList.add("active")
    }

    const [cities,setCities] = useState([<FlightFormFieldSubSection flightType={flightType}></FlightFormFieldSubSection>])

    //functionn to add a new city
    const addCity =(e)=>{
        e.preventDefault();
        const newCity = <FlightFormFieldSubSection flightType={flightType}></FlightFormFieldSubSection>
        setCities([...cities,newCity]);
        console.log(cities)
    }

    return (
        <div className="formfield">
            <div className="sub-content">
                <span id="one_way" onClick={()=>updateFlightType("one_way")} className="active">One Way</span>
                <span id="round_trip" onClick={()=>updateFlightType("round_trip")}>Round Trip</span>
                <span id="multi_city" onClick={()=>updateFlightType("multi_city")} >Multi City</span>
            </div>
            <form id="flightFormField">
                {
                    cities.map(city=>city)
                }
                
                <button style={{display: flightType==="multi_city"?"block":"none",cursor: "pointer"}} onClick={(e)=>{addCity(e)}}>
                    <span class="fa fa-plus"></span>
                </button>
            </form>
        </div>
    )
}