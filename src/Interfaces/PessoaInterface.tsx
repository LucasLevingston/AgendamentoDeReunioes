export interface UserType {
   nome: string,
   email: string;
   horariosOcupados: {
      dia: number;
      horario: number;

   }[];
}
