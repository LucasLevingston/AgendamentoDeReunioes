import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { UserType, getUsersData } from "@/data/UsersData";

export default function Home() {
   const users: UserType[] = getUsersData();
   const user: UserType = users[0]
   return (
      <Container>
         <div className="flex items-center justify-center flex-col gap-5  place-content-center">
            <div className="flex-col flex justify-center items-center gap-3">
               <p>
                  Usuário: <span className="font-bold">{user.nome}</span>
               </p>
               <p>

                  Email: <span className="font-bold">{user.email}</span>
               </p>
            </div>
            <div className="gap-3 flex">

               <Button variant="outline" onClick={() => (window.location.href = "/agendar-reuniao")}>Agendar reunião</Button>
               <Button variant="outline" onClick={() => (window.location.href = "/minhas-reunioes")}>Minhas reuniões</Button>
            </div>
         </div>
      </Container>
   );
}
