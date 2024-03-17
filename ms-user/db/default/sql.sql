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

CREATE SEQUENCE IF NOT EXISTS account_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS info_personal_id_seq
INCREMENT 1
MINVALUE 1
MAXVALUE 1000000
START 1
CACHE 1;

CREATE SEQUENCE IF NOT EXISTS account_roles_id_seq
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

CREATE TABLE IF NOT EXISTS account (
    id BIGINT PRIMARY KEY DEFAULT nextval('account_id_seq'),
    email TEXT NOT NULL UNIQUE,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS account_roles (
    id BIGINT PRIMARY KEY DEFAULT nextval('account_roles_id_seq'),
    rol VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS info_personal (
    id BIGINT PRIMARY KEY DEFAULT nextval('info_personal_id_seq'),
    id_account BIGINT,
    id_rol BIGINT,
    nombre VARCHAR(90) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NOW(),
    FOREIGN KEY (id_account) REFERENCES account(id) ON DELETE CASCADE,
    FOREIGN KEY (id_rol) REFERENCES account_roles(id) ON DELETE CASCADE
);


-- Create Indexes
CREATE INDEX IF NOT EXISTS ip_address_access_ip_address_idx ON ip_address_access (ip_address);
CREATE INDEX IF NOT EXISTS account_email_idx ON account (email);
CREATE INDEX IF NOT EXISTS info_personal_account_idx ON info_personal (id_account);
CREATE INDEX IF NOT EXISTS info_personal_rol_idx ON info_personal (id_rol);

-- PROCEDURES

-- FUNCTIONS - QUERYS

-- Insert Rows Values

INSERT INTO routes_defautls (route) 
values ('my-server-go');

INSERT INTO ip_address_access (ip_address, active)
VALUES ('127.0.0.1', TRUE);

INSERT INTO account_roles (rol)
VALUES ('cliente');

INSERT INTO account_roles (rol)
VALUES ('gerente');

INSERT INTO account_roles (rol)
VALUES ('vendedor');

INSERT INTO account_roles (rol)
VALUES ('jefe taller');