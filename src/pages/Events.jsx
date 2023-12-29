import { useState } from "react";
import EventForm from "../components/page/events/EventForm";

export default function Events() {
  const [conformation, setConformation] = useState(false);
  const [iserror, setIserror] = useState(false);
  return (
    <div>
      <EventForm setConformation={setConformation} setIserror={setIserror} />
      {conformation && (
        <div className="modal">Event has been successfully created</div>
      )}
      {iserror && <div className="modal">Event Creation Failed</div>}
    </div>
  );
}
