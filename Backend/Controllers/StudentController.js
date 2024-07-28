const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Student = require('../Models/StudentModel');

const signup = async (req, res) => {
  try {
    const { username, email, password, age, class: studentClass, preferedtime, languagePreference, learningMethodPreference } = req.body;

    if (!username || !email || !password || !studentClass || !preferedtime || !languagePreference || !learningMethodPreference) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newStudent = new Student({
      username,
      email,
      password: hashedPassword,
      age,
      class: studentClass,
      preferedtime,
      languagePreference,
      learningMethodPreference
    });

    await newStudent.save();

    res.status(201).json({ message: 'Student signed up successfully', student: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup };
