UPDATE account
SET
    email = COALESCE($1, email),
    active = COALESCE($2, active),
    password = COALESCE($3, password)
WHERE id = $4;
