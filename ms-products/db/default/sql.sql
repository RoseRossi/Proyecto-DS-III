-- Postgresql

-- @autor: Cristian Machado <cristian.machado@correounivalle.edu.co>

-- Create Database
SELECT 'CREATE DATABASE server_go'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'server_go')\gexec

-- Connect to Database
\connect server_go

-- Sequences
CREATE SEQUENCE IF NOT EXISTS ip_address_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS routes_defautls_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS companys_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS produtcs_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS company_branch_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS type_product_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

-- Ip Address Access
CREATE TABLE IF NOT EXISTS ip_address_access (
    id BIGINT PRIMARY KEY DEFAULT nextval('ip_address_id_seq'),
    ip_address VARCHAR(50) NOT NULL UNIQUE,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS routes_defautls (
    id BIGINT PRIMARY KEY DEFAULT nextval('routes_defautls_id_seq'),
    route VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS company_branch (
    id BIGINT PRIMARY KEY DEFAULT nextval('company_branch_id_seq'),
    company VARCHAR(30) NOT NULL UNIQUE,
    active BOOLEAN not null DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS companys (
    id BIGINT PRIMARY KEY DEFAULT nextval('companys_id_seq'),
    id_company_branch BIGINT,
    company VARCHAR(30) NOT NULL UNIQUE,
    active BOOLEAN not null DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN key (id_company_branch) REFERENCES company_branch(id)
);

CREATE TABLE IF NOT EXISTS type_product (
    id BIGINT PRIMARY KEY DEFAULT nextval('type_product_id_seq'),
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS produtcs (
    id BIGINT PRIMARY KEY DEFAULT nextval('produtcs_id_seq'),
    id_company BIGINT,
    id_type BIGINT NOT NULL,
    name VARCHAR(30) NOT NULL,
    qty BIGINT NOT NULL DEFAULT 0,
    img TEXT NOT NULL,
    description TEXT NULL,
    ref VARCHAR(20) UNIQUE NOT NULL,
    model VARCHAR(8) NULL,
    in_stock BOOLEAN NOT NULL DEFAULT FALSE,
    price DOUBLE PRECISION not null DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id_company) REFERENCES companys(id),
    FOREIGN KEY (id_type) REFERENCES type_product(id)
);

-- Create Indexes
CREATE INDEX idx_ip_address_access_ip_address ON ip_address_access (ip_address);
CREATE INDEX idx_company_branch_company ON company_branch (company);
CREATE INDEX idx_companys_company ON companys (company);
CREATE INDEX idx_produtcs_id_company ON produtcs (id_company);
CREATE INDEX idx_produtcs_id_type ON produtcs (id_type);
CREATE INDEX idx_produtcs_ref ON produtcs (ref);


-- PROCEDURES

-- FUNCTIONS - QUERYS

-- Insert Rows Values

INSERT INTO routes_defautls (route) 
values ('my-server-go');

INSERT INTO ip_address_access (ip_address, active)
VALUES ('127.0.0.1', TRUE);

INSERT INTO company_branch (company, active) 
VALUES ('Sucursal A', true);

INSERT INTO companys (id_company_branch, company, active) 
VALUES (1, 'Empresa ABC', true);

-- Insertar un nuevo tipo de producto
INSERT INTO type_product (name) 
VALUES ('carro');