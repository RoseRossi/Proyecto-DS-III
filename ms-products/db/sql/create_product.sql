INSERT INTO produtcs (
    id_company,
    id_type,
    name,
    qty,
    img,
    description,
    ref,
    model,
    in_stock,
    price,
    created_at)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, NOW())