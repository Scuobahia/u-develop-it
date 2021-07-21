// Import Express
const express = require('express');
// Add the Port
const PORT = process.env.PORT || 3001;
const app = express();







// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// GET Test Route
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });


  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });



// Function to start the Express.js server port, in this case port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });