export interface Token {
  error?: string;
  token?: string;
}

export interface Error {
  error?: string;
}

export interface User {
  firstname: string;
  lastname: string;
  birthdate: string;
}

export interface Profile {
  data?: User;
  error?: string;
}
