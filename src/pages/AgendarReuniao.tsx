import { useState } from 'react';
import Container from "@/components/Container";
import { Button, } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { UserType, getUsersData, setUsers } from '@/data/UsersData';
import { toast } from 'sonner';

export default function AgendarReuniao() {
   const [horarioSelecionado, setHorarioSelecionado] = useState("");
   const [diaSelecionado, setDiaSelecionado] = useState("");
   const [email, setEmail] = useState("");
   const users: UserType[] = getUsersData();
   const user: UserType = users[0]

   function formatTwoDigits(number: number): string {
      return number.toString().padStart(2, '0');
   }

   const horarios: string[] = [];
   for (let hora = 8; hora <= 22; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 30) {
         horarios.push(`${formatTwoDigits(hora)}:${formatTwoDigits(minuto)}`);
      }
   }
   const diasDoMes: number[] = Array.from({ length: 31 }, (_, index) => index + 1);
   function removerDoisPontos(horario: string): string {
      return horario.replace(":", "");
   }
   function emailExistente() {
      return users.some((user) => user.email === email);
   }

   function marcarReuniao() {
      try {
         const userMarcarReuniao = users.find((user) => user.email === email);
         if (userMarcarReuniao === null) {
            toast.error("Preencha o email");
            return;
         }
         if (horarioSelecionado === '') {
            toast.error("Preencha o email");
            return;
         }
         if (diaSelecionado === '') {
            toast.error("Preencha o email");
            return;
         }

         if (!emailExistente()) {
            toast.error("O email fornecido não está cadastrado.");
            return;
         }
         if (!userMarcarReuniao) {
            toast.error("Usuário não encontrado.");
            return;
         }

         const novoHorarioOcupado = {
            dia: String(diaSelecionado),
            horario: removerDoisPontos(horarioSelecionado),
            emailPessoa: email
         };

         if (userMarcarReuniao.horariosOcupados.some((reuniao) => {
            return reuniao.dia === novoHorarioOcupado.dia && reuniao.horario === novoHorarioOcupado.horario;
         })) {
            toast.error(`${userMarcarReuniao.nome} já está com este horário ocupado.`);
            return;
         }

         userMarcarReuniao.horariosOcupados.push(novoHorarioOcupado);
         user.horariosOcupados.push(novoHorarioOcupado);
         users.map((buscarUsuario) => {
            userMarcarReuniao === buscarUsuario || user === buscarUsuario ?
               buscarUsuario.horariosOcupados.push(novoHorarioOcupado) : null
         })
         setUsers(users)

         toast.success(`Reunião agendada com sucesso para o dia ${diaSelecionado} às ${horarioSelecionado} com ${userMarcarReuniao.nome}`);
         setTimeout(() => {
            window.location.href = '/';
         }, 2000);
      } catch (error) {
         toast.error(`Erro ao agendar reunião`);
         setTimeout(() => {
            window.location.href = '/';
         }, 2000);
      }
   }

   return (
      <Container>
         <div className="p-5 space-y-5">
            <div className="flex justify-center items-center font-bold">
               Agendar nova reunião
            </div>
            <div className="flex items-center justify-between flex-col gap-3">
               <Input placeholder="Email da pessoa" onChange={(e) => setEmail(e.target.value)} className="w-[50%]" />
               <div className='gap-5 flex'>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button variant="outline">Selecionar Dia</Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56 gap-8">
                        <DropdownMenuLabel className="bg-branco">Dias</DropdownMenuLabel>
                        <DropdownMenuRadioGroup value={(diaSelecionado)} onValueChange={setDiaSelecionado} className="bg-branco">
                           <div className='flex flex-wrap gap-1'>
                              {diasDoMes.map((dia) => (
                                 <DropdownMenuRadioItem key={dia} value={String(dia)}>{formatTwoDigits(dia)}</DropdownMenuRadioItem>
                              ))}
                           </div>
                        </DropdownMenuRadioGroup>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button variant="outline">Selecionar Horário</Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-60 bg-branco">
                        <DropdownMenuLabel>Horários</DropdownMenuLabel>
                        <DropdownMenuRadioGroup value={horarioSelecionado} onValueChange={setHorarioSelecionado} >
                           <div className='flex flex-wrap'>
                              {horarios.map((horario) => {
                                 const horarioOcupado = user.horariosOcupados.find(
                                    (item) => item.horario === removerDoisPontos(horario) && String(diaSelecionado) === item.dia
                                 );
                                 return (
                                    horarioOcupado ? (
                                       <DropdownMenuRadioItem disabled key={horario} value={horario}>
                                          <span className='line-through'>{horario}</span>
                                       </DropdownMenuRadioItem>
                                    ) : (
                                       <DropdownMenuRadioItem key={horario} value={horario}>
                                          <span className=''>{horario}</span>
                                       </DropdownMenuRadioItem>
                                    )
                                 );
                              })}
                           </div>


                        </DropdownMenuRadioGroup>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>
            </div>
            <div className="text-right">
               <Button variant="outline" onClick={marcarReuniao}>
                  Agendar reunião
               </Button>
            </div>
         </div>
      </Container >
   );
}
