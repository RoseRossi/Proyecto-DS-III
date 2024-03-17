SELECT t2.nombre,
       t3.rol,
       t1.id AS ref_account
FROM account AS t1
INNER JOIN info_personal AS t2 ON t1.id = t2.id_account
INNER JOIN account_roles AS t3 ON t3.id = t2.id_rol
WHERE t1.email = $1
ORDER BY id DESC 
LIMIT 1