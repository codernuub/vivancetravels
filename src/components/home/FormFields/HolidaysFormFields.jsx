import React from 'react';

export default function HolidaysFormFields() {
    return (
        <div className="formfield">
            <form>
                <div className="input-content" style={{width:"45%"}}>
                    <label>Country</label>
                    <div className="input">
                        {/* <span className="fa fa-plane"></span> */}
                        <select name="country" id="country">
                            <option value="" selected disabled>Select Country</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                </div>
                <div className="input-content" style={{width:"45%"}}>
                    <label>Package Type</label>
                    <div className="input">
                        <select name="package_type" id="package_type">
                            <option value="All Package Types" selected >All Package Types</option>
                            <option value="Holiday Packages">Holiday Packages</option>
                            <option value="Ayurveda Package">Ayurveda Package</option>
                            <option value="Wellness Packages">Wellness Packages</option>
                        </select>
                    </div>
                </div>
                <div className="sort-field">
                    <div className="input-content">
                        <label>Duration</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}