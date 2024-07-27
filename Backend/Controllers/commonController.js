const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Volunteer = require('../Models/VolunteerModel.js');
const Student = require('../Models/StudentModel.js');

const login = async (req, res) => {
  const { email, password, role } = req.body;

  let UserModel;
  if (role === 'student') {
    UserModel = Student;
  } else if (role === 'volunteer') {
    UserModel = Volunteer;
  } else {
    return res.status(400).json({ message: 'Invalid role selected' });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a token
    const token = jwt.sign({ email, role }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
