import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
    const params = useParams();
  return (
    <>
     <h1>EventDetailPage</h1>
     <p>Event ID: {params.eventId}</p>
    </>
  )
  }
export default EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage