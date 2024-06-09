UPDATE produtcs
SET 
    id_company = COALESCE($1, id_company),
    id_type = COALESCE($2, id_type),
    name = COALESCE($3, name),
    qty = COALESCE($4, qty),
    img = COALESCE($5, img),
    description = COALESCE($6, description),
    ref = COALESCE($7, ref),
    model = COALESCE($8, model),
    in_stock = COALESCE($9, in_stock),
    price = COALESCE($10, price),
    created_at = CASE 
        WHEN $1 IS NOT NULL OR $2 IS NOT NULL OR $3 IS NOT NULL OR $4 IS NOT NULL OR $5 IS NOT NULL OR $6 IS NOT NULL OR $7 IS NOT NULL OR $8 IS NOT NULL OR $9 IS NOT NULL OR $10 IS NOT NULL 
        THEN NOW() 
        ELSE created_at 
    END
WHERE id = $11;