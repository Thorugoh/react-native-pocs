const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route to serve the RemoteHome component
app.get('/remote-home', (req, res) => {
  const filePath = path.join(__dirname, 'RemoteHome.jsx');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read RemoteHome component' });
    }
    
    res.setHeader('Content-Type', 'application/javascript');
    res.send(data);
  });
});

// Route to serve component as JSON for easier consumption
app.get('/api/remote-home', (req, res) => {
  const filePath = path.join(__dirname, 'RemoteHome.jsx');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read RemoteHome component' });
    }
    
    res.json({
      component: 'HomeComponent',
      source: data,
      type: 'react-native'
    });
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Remote UI Backend is running' });
});

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Remote UI Backend Server',
    endpoints: {
      '/remote-home': 'Get RemoteHome component source',
      '/api/remote-home': 'Get RemoteHome component as JSON',
      '/health': 'Health check'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Remote UI Backend server is running on http://localhost:${PORT}`);
  console.log(`📱 RemoteHome component available at http://localhost:${PORT}/remote-home`);
  console.log(`📡 API endpoint available at http://localhost:${PORT}/api/remote-home`);
});

module.exports = app;