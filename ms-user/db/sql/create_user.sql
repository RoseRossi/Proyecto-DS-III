BEGIN;

INSERT INTO account (email, active, password) 
VALUES ($1, TRUE, $2);

WITH account_id AS (
    SELECT currval(pg_get_serial_sequence('account', 'id')) AS id_account
)

INSERT INTO info_personal (id_account, id_rol, nombre) 
SELECT id_account,1, $3 FROM account_id;

COMMIT;