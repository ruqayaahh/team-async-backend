const getAdminByEmail = `
    select * from admin_table
    where email = $1;
`;

export default getAdminByEmail;