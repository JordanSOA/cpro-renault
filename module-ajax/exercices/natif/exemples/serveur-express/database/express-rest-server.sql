--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-04-21 18:06:09

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
-- TOC entry 207 (class 1259 OID 16438)
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    region_id bigint NOT NULL
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16436)
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO postgres;

--
-- TOC entry 2849 (class 0 OID 0)
-- Dependencies: 206
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- TOC entry 203 (class 1259 OID 16417)
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16415)
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_id_seq OWNER TO postgres;

--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 202
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- TOC entry 205 (class 1259 OID 16425)
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    country_id bigint NOT NULL
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16423)
-- Name: regions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.regions_id_seq OWNER TO postgres;

--
-- TOC entry 2851 (class 0 OID 0)
-- Dependencies: 204
-- Name: regions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regions_id_seq OWNED BY public.regions.id;


--
-- TOC entry 2701 (class 2604 OID 16441)
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- TOC entry 2699 (class 2604 OID 16420)
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- TOC entry 2700 (class 2604 OID 16428)
-- Name: regions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions ALTER COLUMN id SET DEFAULT nextval('public.regions_id_seq'::regclass);


--
-- TOC entry 2843 (class 0 OID 16438)
-- Dependencies: 207
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cities (id, name, region_id) FROM stdin;
1	Paris	1
2	Neuilly Sur Seine	1
3	Rennes	2
4	Lorient	2
5	Munich\n	3
6	Berlin	4
7	Florence	5
\.


--
-- TOC entry 2839 (class 0 OID 16417)
-- Dependencies: 203
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries (id, name) FROM stdin;
1	France
2	Allemagne
3	Italie
\.


--
-- TOC entry 2841 (class 0 OID 16425)
-- Dependencies: 205
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regions (id, name, country_id) FROM stdin;
1	île de France	1
2	Bretagne	1
3	Bavière	2
4	Brandebourg	2
5	Toscane	3
\.


--
-- TOC entry 2852 (class 0 OID 0)
-- Dependencies: 206
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_id_seq', 7, true);


--
-- TOC entry 2853 (class 0 OID 0)
-- Dependencies: 202
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_id_seq', 3, true);


--
-- TOC entry 2854 (class 0 OID 0)
-- Dependencies: 204
-- Name: regions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regions_id_seq', 5, true);


--
-- TOC entry 2708 (class 2606 OID 16443)
-- Name: cities cities_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pk PRIMARY KEY (id);


--
-- TOC entry 2703 (class 2606 OID 16422)
-- Name: countries countries_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pk PRIMARY KEY (id);


--
-- TOC entry 2706 (class 2606 OID 16430)
-- Name: regions regions_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pk PRIMARY KEY (id);


--
-- TOC entry 2704 (class 1259 OID 16460)
-- Name: fki_country_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_country_id ON public.regions USING btree (country_id);


--
-- TOC entry 2709 (class 1259 OID 16454)
-- Name: fki_region_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_region_id ON public.cities USING btree (region_id);


--
-- TOC entry 2710 (class 2606 OID 16455)
-- Name: regions country_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT country_id FOREIGN KEY (country_id) REFERENCES public.countries(id) NOT VALID;


--
-- TOC entry 2711 (class 2606 OID 16449)
-- Name: cities region_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT region_id FOREIGN KEY (region_id) REFERENCES public.regions(id) NOT VALID;


-- Completed on 2020-04-21 18:06:10

--
-- PostgreSQL database dump complete
--

