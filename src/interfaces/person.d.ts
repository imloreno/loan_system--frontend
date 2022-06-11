export interface IPerson {
  id?: number;
  nombres: string;
  apellidos: string;
  ci: [string, string];
  fecha_nacimiento: string;
  estado?: boolean;
}

export type ApiPerson = {
  id_persona: number;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha_nacimiento: string;
  estado: boolean;
};
