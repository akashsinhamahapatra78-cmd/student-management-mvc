// Student Model
// This model defines the Student schema and provides methods for student management

class Student {
  constructor(id, name, email, rollNumber, enrollmentDate) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.rollNumber = rollNumber;
    this.enrollmentDate = enrollmentDate || new Date();
  }

  // Validate student data
  static validate(data) {
    const errors = [];

    if (!data.name || data.name.trim() === '') {
      errors.push('Name is required');
    }

    if (!data.email || data.email.trim() === '') {
      errors.push('Email is required');
    } else if (!this.isValidEmail(data.email)) {
      errors.push('Invalid email format');
    }

    if (!data.rollNumber || data.rollNumber.trim() === '') {
      errors.push('Roll number is required');
    }

    return errors;
  }

  // Email validation helper
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Convert student object to JSON
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      rollNumber: this.rollNumber,
      enrollmentDate: this.enrollmentDate.toISOString().split('T')[0]
    };
  }
}

module.exports = Student;
