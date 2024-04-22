// Set path for the .env file which contains the key (and other variables in the future maybe?).
// Create a file.env in the root dir, /api/file.env, then add the path as an object inside the config param like
// require('dotenv').config({path: 'C:/User/Desktop/audit/api/file.env'}), and store the var as SECRET_KEY=randomvaluehere (only for testing)
require('dotenv').config({path: 'C:/Users/hp/OneDrive/Desktop/audit/api/file.env' });
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { User } = require('../models/Users');
const verifyToken = require('../middlewares/authMiddleware');

// JWT Secret Key (Stored in .env file inside the root dir)
const secretKey = process.env.SECRET_KEY;

router.get('/', async (req, res) => {
    const listAllUsers = await User.findAll();
    res.json(listAllUsers);
});

// Register User API Endpoint
router.post('/register', async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error occured during registration', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});



router.post('/users/:id', async (req, res, next) => {
   const userId = req.body.id;
   const { email, username, role } = req.body;
    
   try {
    const user = await User.findOne({where: {userId} });

    if(!user){
        return res.status(404).json({ error: 'This user does not exist'});
    }

    user.email = email;
    user.username = username;
    user.role = role;

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);

   } catch (error) {
    console.error('Error in updating this user', error);
    res.status(500).json({error: 'Internal Server Error'});
   }
 
});

// User Login API Endpoint
router.post('/login', async(req, res) => {
    const { email , password } = req.body;

    try{ 
        //Unique Email 
        const user = await User.findOne({where: {email} });
        if(!user) {
            return res.status(404).json({error: 'User was not found'});
        }

        // Since we use bcrypt to encrypt the password in the database, we use the compare method here in order to see if the user input 
        // matches.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(404).json({error: 'Invalid Password Value'});
        }


        // Generate Token
        const token = jwt.sign({id: user.id, email: user.email, role: user.role}, secretKey , {expiresIn: '1h'});

        res.cookie('token', token, {httpOnly: true, maxAge:3600000});


        res.json({token});

    } catch (error) {
        console.error('Error occured during login', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;