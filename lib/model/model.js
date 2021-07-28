import pool from '../utils/pool';

//this is where we do SQL in our static async functions
//insert, getAll, getById, updateById, deleteById

export default class Student {
    id;
    firstName;
    lastName;
    status;

    constructor(row) {
        this.id = row.id;
        this.firstName = row.firstName;
        this.lastName = row.lastName;
        this.status = row.status;
    }
    
    static async insert({ firstName, lastName, status }) {
        const { rows } = await pool.query(
            'INSERT INTO students (first_name, last_name, status) VALUES ($1, $2, $3) RETURNING *',
            [firstName, lastName, status]
        );
        return new Student(rows[0]);
    }   
}