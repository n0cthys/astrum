// Import required modules
import express, { Request, Response } from 'express';

// Create Express app
const app = express();
const port = 3000;

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});