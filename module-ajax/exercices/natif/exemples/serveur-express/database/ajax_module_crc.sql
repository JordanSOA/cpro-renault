PGDMP         &                x           ajax_module_crc    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    16414    ajax_module_crc    DATABASE     �   CREATE DATABASE ajax_module_crc WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';
    DROP DATABASE ajax_module_crc;
                postgres    false            �            1259    16438    cities    TABLE     �   CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    region_id bigint NOT NULL
);
    DROP TABLE public.cities;
       public         heap    postgres    false            �            1259    16436    cities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cities_id_seq;
       public          postgres    false    207            "           0    0    cities_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;
          public          postgres    false    206            �            1259    16417 	   countries    TABLE     e   CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    16415    countries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.countries_id_seq;
       public          postgres    false    203            #           0    0    countries_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;
          public          postgres    false    202            �            1259    16425    regions    TABLE     �   CREATE TABLE public.regions (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    country_id bigint NOT NULL
);
    DROP TABLE public.regions;
       public         heap    postgres    false            �            1259    16423    regions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.regions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.regions_id_seq;
       public          postgres    false    205            $           0    0    regions_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.regions_id_seq OWNED BY public.regions.id;
          public          postgres    false    204            �
           2604    16441 	   cities id    DEFAULT     f   ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);
 8   ALTER TABLE public.cities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16420    countries id    DEFAULT     l   ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);
 ;   ALTER TABLE public.countries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    16428 
   regions id    DEFAULT     h   ALTER TABLE ONLY public.regions ALTER COLUMN id SET DEFAULT nextval('public.regions_id_seq'::regclass);
 9   ALTER TABLE public.regions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205                      0    16438    cities 
   TABLE DATA           5   COPY public.cities (id, name, region_id) FROM stdin;
    public          postgres    false    207   �                 0    16417 	   countries 
   TABLE DATA           -   COPY public.countries (id, name) FROM stdin;
    public          postgres    false    203   �                 0    16425    regions 
   TABLE DATA           7   COPY public.regions (id, name, country_id) FROM stdin;
    public          postgres    false    205   3       %           0    0    cities_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cities_id_seq', 7, true);
          public          postgres    false    206            &           0    0    countries_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.countries_id_seq', 3, true);
          public          postgres    false    202            '           0    0    regions_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.regions_id_seq', 5, true);
          public          postgres    false    204            �
           2606    16443    cities cities_pk 
   CONSTRAINT     N   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pk PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pk;
       public            postgres    false    207            �
           2606    16422    countries countries_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pk;
       public            postgres    false    203            �
           2606    16430    regions regions_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.regions DROP CONSTRAINT regions_pk;
       public            postgres    false    205            �
           1259    16460    fki_country_id    INDEX     H   CREATE INDEX fki_country_id ON public.regions USING btree (country_id);
 "   DROP INDEX public.fki_country_id;
       public            postgres    false    205            �
           1259    16454    fki_region_id    INDEX     E   CREATE INDEX fki_region_id ON public.cities USING btree (region_id);
 !   DROP INDEX public.fki_region_id;
       public            postgres    false    207            �
           2606    16455    regions country_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.regions
    ADD CONSTRAINT country_id FOREIGN KEY (country_id) REFERENCES public.countries(id) NOT VALID;
 <   ALTER TABLE ONLY public.regions DROP CONSTRAINT country_id;
       public          postgres    false    2703    203    205            �
           2606    16449    cities region_id    FK CONSTRAINT     }   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT region_id FOREIGN KEY (region_id) REFERENCES public.regions(id) NOT VALID;
 :   ALTER TABLE ONLY public.cities DROP CONSTRAINT region_id;
       public          postgres    false    2706    207    205               `   x��;
�@����@��[X���6",�n�����r�FRbf��lK�mT�V�1����J{~7���y�JZ����Z:�v�I4��"�E��         +   x�3�t+J�KN�2�t��I�ML�K�2��,I��L����� �	�         Q   x�3�<�.'U!%U��(1/9�Ӑˈө(�$1=�1�tJ,�<��(�ӈ�(������_Z��r��''s��qqq �     