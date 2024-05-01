import express from 'express';

const app = express();
const port = 5500;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
