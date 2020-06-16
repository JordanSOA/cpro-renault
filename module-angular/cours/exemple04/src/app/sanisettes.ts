export interface SanisetteFields {
  acces_pmr: string;
  adresse: string;
  arrondissement: string;
  geo_point_2d: [number, number];
  horaire: string;
  statut: string;
  type: string;
}

export interface Sanisette {
  fields: SanisetteFields;
}

export interface Sanisettes {
  records: Sanisette[];
}
