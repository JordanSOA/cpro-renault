--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-04-21 19:57:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2832 (class 1262 OID 16461)
-- Name: ajax_module_pc; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE ajax_module_pc WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';


ALTER DATABASE ajax_module_pc OWNER TO postgres;

\connect ajax_module_pc

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16465)
-- Name: addresses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addresses (
    street text,
    country text,
    zipcode text,
    id bigint NOT NULL
);


ALTER TABLE public.addresses OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16500)
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.addresses ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 16462)
-- Name: persons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.persons (
    firstname text,
    lastname text,
    birthdate date,
    id bigint NOT NULL,
    address_id bigint NOT NULL
);


ALTER TABLE public.persons OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16510)
-- Name: persons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.persons ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.persons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2699 (class 2606 OID 16519)
-- Name: addresses pk_address_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT pk_address_id PRIMARY KEY (id);


--
-- TOC entry 2697 (class 2606 OID 16521)
-- Name: persons pk_person_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT pk_person_id PRIMARY KEY (id);


--
-- TOC entry 2695 (class 1259 OID 16527)
-- Name: fki_fk_address_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_address_id ON public.persons USING btree (address_id);


--
-- TOC entry 2700 (class 2606 OID 16522)
-- Name: persons fk_address_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT fk_address_id FOREIGN KEY (address_id) REFERENCES public.addresses(id) NOT VALID;


-- Completed on 2020-04-21 19:57:50

--
-- PostgreSQL database dump complete
--

