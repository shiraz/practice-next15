import { useRef, useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        feedback: enteredFeedback,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response.json();
    }).then( data => {
      console.log('Fetch Response: ', data);
    });
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback').then(response => {
      return response.json();
    }).then(data => {
      setFeedbackItems(data.feedback);
    });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <input id="feedback" rows='5' ref={feedbackRef} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(item => (
          <li key={item.id}>{item.text} ({item.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
