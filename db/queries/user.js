export const insertUserApplication = `
        insert into applicants (
            id,
            first_name,
            last_name,
            email,
            dob,
            age,
            address,
            university,
            course,
            cgpa,
            cv,
            photo,
            batch_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning 
            id,
            first_name,
            last_name,
            email,
            dob,
            age,
            address,
            university,
            course,
            cgpa,
            cv,
            photo,
            batch_id,
            created_at;
            `;

export const fetchUserByEmail = 'SELECT * FROM user_info WHERE email = $1;';

export const updateUser = `
    UPDATE user_table
    SET
    id = $1,
    first_name = $2,
    last_name = $3,
    email = $4,
    dob = $5,
    age = $6,
    address = $7,
    university = $8,
    course = $9,
    cgpa = $10,
    cv = $11,
    photo = $12,
    updated_at = NOW() WHERE user_id = $13;`;

export const insertNewUser = `insert into user_table (
    user_id,
    full_name,
    email,
    phone,
    password) values ($1, $2, $3, $4, $5);
`;

export const getUserByEmail = `
    select * from user_table
    where email = $1;
`;

