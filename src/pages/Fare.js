import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import '../css/content.css';
import '../css/fare.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function FareCalender(props) {
    const myEventsList = [
        {
            allDay: true,
            title: 'Rs 5000',
            start: '16-09-2021',
            end: '16-09-2021'
        }
    ]
    return (
        <div className="content fare-calendar">
            <div className="form-content">
                <div className="form-head">
                    <span className="fa fa-search"></span>
                    <h2>Modify Search</h2>
                </div>
                <form>
                    <div className="field-content">
                        <label>From</label>
                        <div className="input">
                            <span className="fa fa-plane"></span>
                            <input placeholder="City" />
                        </div>
                    </div>
                    <div className="field-content">
                        <label>To</label>
                        <div className="input">
                            <span className="fa fa-plane"></span>
                            <input placeholder="City" />
                        </div>
                    </div>
                    <div className="field-content">
                        <label>Month</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                    <div className="field-content">
                        <label>Travellers</label>
                        <div className="input">
                            <span className="fa fa-user"></span>
                            <select type="date" placeholder="Travellers"></select>
                        </div>
                    </div>
                    <button><span class="fa fa-search"></span></button>
                </form>
            </div>
            <div className="calender">
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>);
}
