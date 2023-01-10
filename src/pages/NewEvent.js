import { useHistory } from 'react-router-dom';

import NewEventForm from '../components/events/NewEventForm';

function NewEventPage() {
  const history = useHistory();

  function addEventHandler(eventData) {
    fetch(
      'https://react-meetup-app-3006c-default-rtdb.firebaseio.com/events.json',
      {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Event</h1>
      <NewEventForm onAddEvent={addEventHandler} />
    </section>
  );
}

export default NewEventPage;
