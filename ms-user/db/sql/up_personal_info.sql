UPDATE info_personal
SET
    id_account  = COALESCE($1, id_account),
    id_rol      = COALESCE($2, id_rol),
    nombre      = COALESCE($3, nombre)
WHERE id = $4;