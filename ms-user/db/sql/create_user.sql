
-- Inserta el nuevo usuario en la tabla account
INSERT INTO account (email, active, password) 
VALUES ($1, TRUE, $2);