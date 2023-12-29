import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Input from "../../common/Input";
import Button from "../../common/Button";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "./eventform.css";
export default function EventForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [email, setEmail] = useState("");

  const handleCreateEvent = () => {
    const url = "http://localhost:5000/calendar/eventcreate";
    const data = {
      eventStartAt: startDate,
      eventClosesAt: endDate,
      emailId: email,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="eventform">
      <div className="datesection">
        <span className="selectevent">
          <label htmlFor="">Events starts on</label>
          <DateTimePicker
            onChange={setStartDate}
            value={startDate}
            className="datepicker"
          />
        </span>
        <span className="selectevent">
          <label htmlFor="">Events Ends on</label>
          <DateTimePicker
            onChange={setEndDate}
            value={endDate}
            className="datepicker"
          />
        </span>
      </div>
      <div className="email">
        <label htmlFor="">Enter Client Email</label>
        <Input
          name="email"
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Button
          title="Create an event"
          onClick={handleCreateEvent}
          size="large"
        />
      </div>
    </div>
  );
}
