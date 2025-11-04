# Student Management System (MVC Architecture)

## Overview

A comprehensive student management system built using Node.js and Express.js following the **MVC (Model-View-Controller)** architectural pattern. This system demonstrates best practices for organizing web applications with clear separation of concerns.

## Features

- ✅ Create, Read, Update, and Delete (CRUD) operations for students
- ✅ MVC architectural pattern
- ✅ Express.js web framework
- ✅ EJS templating engine
- ✅ RESTful API endpoints
- ✅ Form validation
- ✅ Error handling

## Project Structure

```
student-management-mvc/
├── models/
│   └── Student.js          # Student data model and schema
├── views/
│   ├── students/
│   │   ├── index.ejs       # List all students
│   │   ├── create.ejs      # Create new student form
│   │   ├── edit.ejs        # Edit student form
│   │   └── show.ejs        # Student details view
│   └── layout.ejs          # Main layout template
├── controllers/
│   └── StudentController.js # Student CRUD operations
├── routes/
│   └── students.js         # Student routes
├── app.js                  # Express app configuration
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashsinhamahapatra78-cmd/student-management-mvc.git
   cd student-management-mvc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`

## Dependencies

- **express**: Web application framework
- **ejs**: Templating engine for views
- **body-parser**: Middleware for parsing request bodies
- **nodemon**: Development dependency for auto-restarting

## API Endpoints

- `GET /students` - List all students
- `POST /students` - Create a new student
- `GET /students/:id` - Get student details
- `PUT /students/:id` - Update student information
- `DELETE /students/:id` - Delete a student

## MVC Architecture

### Model (models/Student.js)
- Defines student schema and data structure
- Handles data validation
- Contains business logic

### View (views/)
- EJS templates for rendering HTML
- User interface for CRUD operations
- Form handling and data display

### Controller (controllers/StudentController.js)
- Handles HTTP requests and responses
- Manages communication between models and views
- Implements CRUD operations
- Performs data processing and validation

## Usage

### Creating a Student
1. Navigate to the "Add New Student" page
2. Fill in the student details
3. Submit the form

### Viewing Students
- Visit the home page to see all registered students
- Click on a student to view detailed information

### Updating Student Information
1. Click on "Edit" for a specific student
2. Modify the details
3. Save changes

### Deleting a Student
- Click the "Delete" button next to a student record

## File Descriptions

### models/Student.js
Defines the Student model with properties like name, email, roll number, and enrollment date.

### controllers/StudentController.js
Implements all CRUD operations:
- `index()` - Retrieve all students
- `create()` - Handle new student creation
- `show()` - Display student details
- `update()` - Modify student information
- `delete()` - Remove a student

### views/students/index.ejs
Displays a table of all students with options to view, edit, or delete each record.

## Best Practices Implemented

✅ Separation of concerns (MVC pattern)
✅ DRY (Don't Repeat Yourself) principle
✅ Error handling and validation
✅ RESTful conventions
✅ Middleware usage for cross-cutting concerns
✅ Template inheritance with layouts

## Future Enhancements

- [ ] Database integration (MongoDB/MySQL)
- [ ] User authentication
- [ ] Search and filtering capabilities
- [ ] Pagination for student lists
- [ ] Export to CSV/PDF
- [ ] Image upload for student photos
- [ ] API documentation with Swagger
- [ ] Unit and integration tests

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML5, CSS3
- **Architecture**: MVC Pattern
- **Version Control**: Git/GitHub

## License

MIT License - feel free to use this project for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created as an educational project to demonstrate MVC architecture principles.

## Support

For any questions or issues, please open an issue on GitHub.
