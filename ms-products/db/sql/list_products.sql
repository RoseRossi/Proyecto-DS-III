SELECT
    id,
    name,
    qty,
    img,
    description,
    ref,
    model,
    in_stock,
    price,
    created_at
FROM produtcs
WHERE
in_stock is TRUE AND
created_at > $1 AND
id_company = $2
ORDER BY id DESC LIMIT $3