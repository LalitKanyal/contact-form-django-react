import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    const data = {
      name, email, message
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label className="label">
        Email:
        <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label className="label">
        Message:
        <textarea className="textarea" value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button className="button" type="submit">Submit</button>
      
      <style jsx>{`
        .label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .input, .textarea {
          display: block;
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
          margin-bottom: 1rem;
        }

        .textarea {
          height: 10rem;
        }

        .button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 0.25rem;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
        }

        .button:hover {
          background-color: #0053a6;
        }
      `}</style>
    </form>
  );
}
