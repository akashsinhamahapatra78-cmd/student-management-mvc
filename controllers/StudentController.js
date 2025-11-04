// Student Controller
// Handles all CRUD operations for students

const Student = require('../models/Student');

// In-memory storage for students (for demonstration)
// In a real application, this would be a database
let students = [
  new Student(1, 'John Doe', 'john@example.com', 'CS001', new Date('2023-01-15')),
  new Student(2, 'Jane Smith', 'jane@example.com', 'CS002', new Date('2023-02-10')),
  new Student(3, 'Bob Johnson', 'bob@example.com', 'CS003', new Date('2023-03-05'))
];

let nextId = 4;

class StudentController {
  // GET all students
  static getAllStudents(req, res) {
    res.render('students/index', {
      title: 'Student Management System',
      students: students
    });
  }

  // GET student by ID
  static getStudentById(req, res) {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
      return res.status(404).render('404', { title: 'Student Not Found' });
    }
    res.render('students/show', {
      title: 'Student Details',
      student: student
    });
  }

  // GET create form
  static getCreateForm(req, res) {
    res.render('students/create', {
      title: 'Add New Student'
    });
  }

  // POST create student
  static createStudent(req, res) {
    const { name, email, rollNumber } = req.body;
    
    // Validate input
    const errors = Student.validate({ name, email, rollNumber });
    if (errors.length > 0) {
      return res.render('students/create', {
        title: 'Add New Student',
        errors: errors,
        formData: { name, email, rollNumber }
      });
    }

    // Create new student
    const newStudent = new Student(nextId++, name, email, rollNumber);
    students.push(newStudent);

    res.redirect('/students');
  }

  // GET edit form
  static getEditForm(req, res) {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
      return res.status(404).render('404', { title: 'Student Not Found' });
    }
    res.render('students/edit', {
      title: 'Edit Student',
      student: student
    });
  }

  // PUT/POST update student
  static updateStudent(req, res) {
    const { name, email, rollNumber } = req.body;
    
    // Validate input
    const errors = Student.validate({ name, email, rollNumber });
    if (errors.length > 0) {
      return res.render('students/edit', {
        title: 'Edit Student',
        student: students.find(s => s.id == req.params.id),
        errors: errors,
        formData: { name, email, rollNumber }
      });
    }

    // Update student
    const student = students.find(s => s.id == req.params.id);
    if (student) {
      student.name = name;
      student.email = email;
      student.rollNumber = rollNumber;
    }

    res.redirect('/students');
  }

  // DELETE student
  static deleteStudent(req, res) {
    students = students.filter(s => s.id != req.params.id);
    res.redirect('/students');
  }
}

module.exports = StudentController;
