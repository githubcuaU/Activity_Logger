

Due Date: 10/6/24, 12:59 AM (EDT)
Points: 30

User Activity Logger with Event Loop and Batch Processing

Objective:
Build a user activity logging system that tracks interactions on a web page. Each time a user performs an action (e.g., clicking a button or submitting a form), the server logs the event.

The system should process these logs using Node.js’s event loop and send a batch summary of the logged events to the user at regular intervals (e.g., every 2 minutes).

Requirements

Front-End (User Interaction):
•	Create a simple front-end web page that tracks user interactions.
Actions to track:
•	Button clicks.
•	Form submissions.
•	Each time an interaction happens, send an event to the server using an HTTP request (fetch API).
•	Display a confirmation message on the console log when the server logs an interaction.

Back-End (Node.js with Event Loop):
•	Build a Node.js server that receives event logs from the client.
•	The server should collect logs asynchronously and batch them together. The server should send the client a summary of the interactions every 2 minutes.
•	You should use the Node.js event loop (e.g., setInterval) to process the logs at regular intervals (e.g., 2-minute intervals).
•	Store the event logs temporarily in memory or a file and clear the logs after each batch is processed and sent.

Batch Processing of Logs:
•	Log each interaction with a timestamp and description (e.g., "Button clicked," "Form submitted").
•	At every minute interval, aggregate the logs and send a summary to the user, displaying how many actions occurred and which ones.
•	Once the logs are sent, reset the log collection for the next batch.

Error Handling:
•	Handle errors such as failed connections between the front end and the server.
•	Ensure the logs are cleared properly after each batch is processed.

