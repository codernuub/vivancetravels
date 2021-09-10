import React from 'react'

function FlightFormFieldSubSection({flightType}) {
    console.log(flightType)
    return (
        <span className="span">
                <div className="input-content">
                    <label>From</label>
                    <div className="input">
                        <span className="fa fa-plane"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <div className="input-content">
                    <label>To</label>
                    <div className="input">
                        <span className="fa fa-plane fa-rotate-90"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                {/* <div className="sort-field"> */}
                    <div className="input-content">
                        <label>Departure</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                    <div className="input-content">
                        <label>Return</label>
                        <div 
                            className={flightType==="one_way"?"input date-input disabled-date":"input date-input"}
                            disabled={flightType==="one_way"?true:false}    
                        >
                            <input type="date" placeholder="Select Date"/>
                        </div>
                    </div>
                {/* </div> */}
                <button><span class="fa fa-search"></span></button>
                <br/> 
        </span>
    )
}

export default FlightFormFieldSubSection
