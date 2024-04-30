import Container from "@/components/Container"
import { Button } from "@/components/ui/button";
import { UserType, getUsersData } from "@/data/UsersData";

export default function MinhasReunioes() {
   const users: UserType[] = getUsersData();
   const user: UserType = users[0]
   function formatHorario(horario: string) {
      if (horario.length !== 4) {
         console.error("Formato de horário inválido. O horário deve ter 4 caracteres.");
         return null;
      }
      const horas = horario.slice(0, 2);
      const minutos = horario.slice(2);
      return `${horas}:${minutos}`;
   }
   return (
      <Container>
         <div className="p-3 flex flex-col">
            <div className="flex justify-center items-center font-bold">
               Minhas reuniões
            </div>
            <div className="flex flex-wrap gap-3 p-5 h-full">
               {user.horariosOcupados.map((reuniao) => (
                  <div className="w-56 border h-20 rounded text-sm p-2 ">
                     <p>
                        Dia: <span className="font-bold">{reuniao.dia}</span>
                     </p>
                     <p>
                        Horário: <span className="font-bold">{formatHorario(reuniao.horario)}</span>
                     </p>
                     <p>
                        Com<span className="font-bold"> {reuniao.emailPessoa}</span>
                     </p>
                  </div>

               ))
               }
            </div>
            <div className="flex justify-end">
               <Button className="flex justify-center items-center" variant="outline" onClick={() => (window.location.href = "/agendar-reuniao")}>
                  Agendar nova reunião
               </Button>
            </div>
         </div>
      </Container>
   )
}
