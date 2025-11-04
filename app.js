// Student Management System
// Main Express Application File
// MVC Architecture Implementation

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const StudentController = require('./controllers/StudentController');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware for PUT and DELETE requests
app.use((req, res, next) => {
  if (req.body && req.body._method) {
    req.method = req.body._method;
    delete req.body._method;
  }
  next();
});

// Routes
// ============================================

// GET - Display all students
app.get('/students', (req, res) => {
  StudentController.getAllStudents(req, res);
});

// GET - Display create form
app.get('/students/create', (req, res) => {
  StudentController.getCreateForm(req, res);
});

// POST - Create new student
app.post('/students', (req, res) => {
  StudentController.createStudent(req, res);
});

// GET - Display single student
app.get('/students/:id', (req, res) => {
  StudentController.getStudentById(req, res);
});

// GET - Display edit form
app.get('/students/:id/edit', (req, res) => {
  StudentController.getEditForm(req, res);
});

// PUT - Update student
app.put('/students/:id', (req, res) => {
  StudentController.updateStudent(req, res);
});

// DELETE - Delete student
app.delete('/students/:id', (req, res) => {
  StudentController.deleteStudent(req, res);
});

// Home route - Redirect to students list
app.get('/', (req, res) => {
  res.redirect('/students');
});

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Not Found',
    message: 'The page you are looking for does not exist.'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    title: '500 - Server Error',
    message: 'An internal server error occurred.'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`Student Management System`);
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`========================================\n`);
});

module.exports = app;
