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

export const updateUserPasswordById =  
    `UPDATE user_info
    SET 
        email = $1,
        password = $2,
        updated_at = NOW()
    WHERE id = $3
    RETURNING *;
    `;
