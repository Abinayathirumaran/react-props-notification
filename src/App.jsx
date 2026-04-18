import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Notification from './components/Notification';
import TrainCard from './components/TrainCard';


function App() {

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  return (
    <div>
      <Navbar />

      <div>

        <div className='p-4'>
          <Notification message={message} type={type} />
        </div>



        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <TrainCard
            name="Express Train"
            status="Available"
            onBook={() => {
              setMessage(" Ticket booked successfully!");
              setType("success");
            }}
          />

          <TrainCard
            name="Superfast Train"
            status="Few Seats"
            onBook={() => {
              setMessage(" Only few seats left!");
              setType("warning");
            }}
          />

          <TrainCard
            name="Local Train"
            status="Full"
            onBook={() => {
              setMessage(" Booking failed! Train full.");
              setType("error");
            }}
          />


        </div>


      </div>
    </div>
  );
}

export default App