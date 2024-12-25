import express from 'express'
import bodyParser from 'body-parser'
import sqlite3 from 'sqlite3'
import cors from 'cors'
sqlite3.verbose();


const app = express();
const port = 3003;
app.use(bodyParser.json());
app.use(cors());


// Open the SQLite database
const db = new sqlite3.Database('./mydatabase.db');



// Create - Add a new student
app.post('/students', (req, res) => {
    const { student_name, registration_number, academic_duration ,studentmail} = req.body;
    const query = `INSERT INTO students (student_name, registration_number, academic_duration, studentmail) VALUES (?, ?, ?, ?)`;
    db.run(query, [student_name, registration_number, academic_duration,studentmail], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
});

// Read - Get all students
app.get('/students', (req, res) => {
    const query = `SELECT * FROM students`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ students: rows });
    });
});

// Read - Get a single student by registration_number
app.get('/students/:id', (req, res) => {
    const {id} = req.params;
    const query = `SELECT * FROM students WHERE id = ?`;
    db.get(query, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        console.log('Fetched student:', row);
        res.json({ student: row });
    });
});

// Update - Update a student's details
app.put('/students', (req, res) => {
   
    const { student_name, registration_number, academic_duration,studentmail } = req.body;
    const query = `UPDATE students SET student_name = ?, academic_duration = ?, studentmail = ? WHERE registration_number= ?`;
    db.run(query, [student_name, academic_duration,studentmail, registration_number], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Delete - Remove a student by ID
app.delete('/students', (req, res) => {
    const { registration_number } = req.body;
    const query = `DELETE FROM students WHERE registration_number = ?`;
    db.run(query, [registration_number], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
