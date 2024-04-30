export interface UserType {
   nome: string,
   email: string;
   horariosOcupados: {
      dia: string;
      horario: string;
      emailPessoa: string
   }[];
}

export function formatTwoDigits(number: number): string {
   return number.toString().padStart(2, '0');
}
export function setUsers(novoData: UserType[]) {
   const storedUsers = localStorage.getItem('users');
   if (storedUsers === null) {
      localStorage.setItem('users', JSON.stringify(usersData));
   }
   localStorage.setItem('users', JSON.stringify(novoData));
}

export function getUsersData(): UserType[] {
   const storedUsers = localStorage.getItem('users');

   return storedUsers ? JSON.parse(storedUsers) : usersData;
}

const usersData: UserType[] = [
   {
      nome: "Lucas Levingston",
      email: "lucaslevingston94@gmail.com",
      horariosOcupados: [
         { dia: `3`, horario: `${formatTwoDigits(8)}${formatTwoDigits(30)}`, emailPessoa: "david@gmail.com" },
         { dia: `4`, horario: `${formatTwoDigits(14)}${formatTwoDigits(15)}`, emailPessoa: "david@gmail.com" },
         { dia: `5`, horario: `${formatTwoDigits(11)}${formatTwoDigits(0)}`, emailPessoa: "david@gmail.com" }
      ]
   },
   {
      nome: "David Nóbrega",
      email: "david@gmail.com",
      horariosOcupados: [
         { dia: `3`, horario: `${formatTwoDigits(8)}${formatTwoDigits(30)}`, emailPessoa: "lucaslevingston94@gmail.com" },
         { dia: `4`, horario: `${formatTwoDigits(14)}${formatTwoDigits(15)}`, emailPessoa: "raimundo@gmail.com" },
         { dia: `5`, horario: `${formatTwoDigits(11)}${formatTwoDigits(0)}`, emailPessoa: "henrique@gmail.com" }
      ]
   },
   {
      nome: "Raimundo",
      email: "raimundo@gmail.com",
      horariosOcupados: [
         { dia: `3`, horario: `${formatTwoDigits(8)}${formatTwoDigits(30)}`, emailPessoa: "david@gmail.com" },
         { dia: `4`, horario: `${formatTwoDigits(14)}${formatTwoDigits(15)}`, emailPessoa: "david@gmail.com" },
         { dia: `5`, horario: `${formatTwoDigits(11)}${formatTwoDigits(0)}`, emailPessoa: "david@gmail.com" }
      ]
   },
   {
      nome: "Henrique",
      email: "henrique@gmail.com",
      horariosOcupados: [
         { dia: `3`, horario: `${formatTwoDigits(8)}${formatTwoDigits(30)}`, emailPessoa: "david@gmail.com" },
         { dia: `4`, horario: `${formatTwoDigits(14)}${formatTwoDigits(15)}`, emailPessoa: "david@gmail.com" },
         { dia: `5`, horario: `${formatTwoDigits(11)}${formatTwoDigits(0)}`, emailPessoa: "david@gmail.com" }
      ]
   },
   {
      nome: "Ana Silva",
      email: "anasilva@example.com",
      horariosOcupados: [
         { dia: "2", horario: `${formatTwoDigits(9)}${formatTwoDigits(0)}`, emailPessoa: "carlos@example.com" },
         { dia: "5", horario: `${formatTwoDigits(16)}${formatTwoDigits(30)}`, emailPessoa: "maria@example.com" },
         { dia: "6", horario: `${formatTwoDigits(13)}${formatTwoDigits(45)}`, emailPessoa: "joao@example.com" }
      ]
   },
   {
      nome: "Mariana Santos",
      email: "marianasantos@example.com",
      horariosOcupados: [
         { dia: "3", horario: `${formatTwoDigits(10)}${formatTwoDigits(0)}`, emailPessoa: "pedro@example.com" },
         { dia: "4", horario: `${formatTwoDigits(15)}${formatTwoDigits(30)}`, emailPessoa: "carla@example.com" },
         { dia: "7", horario: `${formatTwoDigits(12)}${formatTwoDigits(0)}`, emailPessoa: "juliana@example.com" }
      ]
   },
   {
      nome: "Rafael Oliveira",
      email: "rafaeloliveira@example.com",
      horariosOcupados: [
         { dia: "1", horario: `${formatTwoDigits(11)}${formatTwoDigits(30)}`, emailPessoa: "lucas@example.com" },
         { dia: "3", horario: `${formatTwoDigits(14)}${formatTwoDigits(45)}`, emailPessoa: "patricia@example.com" },
         { dia: "6", horario: `${formatTwoDigits(10)}${formatTwoDigits(15)}`, emailPessoa: "fernanda@example.com" }
      ]
   }, {
      nome: "Pedro Almeida",
      email: "pedroalmeida@example.com",
      horariosOcupados: [
         { dia: "1", horario: `${formatTwoDigits(8)}${formatTwoDigits(0)}`, emailPessoa: "ana@example.com" },
         { dia: "4", horario: `${formatTwoDigits(12)}${formatTwoDigits(30)}`, emailPessoa: "marcos@example.com" },
         { dia: "5", horario: `${formatTwoDigits(14)}${formatTwoDigits(0)}`, emailPessoa: "julia@example.com" }
      ]
   },
   {
      nome: "Camila Oliveira",
      email: "camilaoliveira@example.com",
      horariosOcupados: [
         { dia: "2", horario: `${formatTwoDigits(10)}${formatTwoDigits(15)}`, emailPessoa: "lucas@example.com" },
         { dia: "3", horario: `${formatTwoDigits(13)}${formatTwoDigits(0)}`, emailPessoa: "mariana@example.com" },
         { dia: "6", horario: `${formatTwoDigits(9)}${formatTwoDigits(45)}`, emailPessoa: "gabriel@example.com" }
      ]
   },
   {
      nome: "Luiza Pereira",
      email: "luizapereira@example.com",
      horariosOcupados: [
         { dia: "1", horario: `${formatTwoDigits(15)}${formatTwoDigits(30)}`, emailPessoa: "rodrigo@example.com" },
         { dia: "4", horario: `${formatTwoDigits(10)}${formatTwoDigits(45)}`, emailPessoa: "amanda@example.com" },
         { dia: "7", horario: `${formatTwoDigits(11)}${formatTwoDigits(0)}`, emailPessoa: "gustavo@example.com" }
      ]
   },
   {
      nome: "Fernanda Lima",
      email: "fernandalima@example.com",
      horariosOcupados: [
         { dia: "2", horario: `${formatTwoDigits(14)}${formatTwoDigits(15)}`, emailPessoa: "carlos@example.com" },
         { dia: "5", horario: `${formatTwoDigits(9)}${formatTwoDigits(0)}`, emailPessoa: "patricia@example.com" },
         { dia: "6", horario: `${formatTwoDigits(11)}${formatTwoDigits(30)}`, emailPessoa: "rodrigo@example.com" }
      ]
   }


];
