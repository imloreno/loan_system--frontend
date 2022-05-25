export interface IPerson {
  id: number;
  nombres: string;
  apellidos: string;
  ci: [string, string];
  fecha_nacimiento: string;
  estado: boolean;
}

type TPerson = {
  id: number;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha_nacimiento: string;
  estado: boolean;
};
