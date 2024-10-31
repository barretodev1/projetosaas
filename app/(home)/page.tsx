import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns"
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import BarbershopItem from "./_components/barbershop-item"
import { db } from "../_lib/prisma"

export default async function Home() {

  const barbershop = await db.barbershop.findMany({})

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-normal">Olá, <span className="text-xl font-bold">Caio!</span></h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}</p>
      </div>

      <div className="mt-6 px-5">
        <Search />
      </div>

      <div className="flex flex-col p-5 mt-3 gap-3">
        <h2 className="text-xs uppercase text-gray-400 font-bold">AGENDAMENTOS</h2>
        <BookingItem />
      </div>    

      <div className="p-5">
        <h2 className="text-xs uppercase text-gray-400 font-bold">RECOMENDADOS</h2>

        <div className="flex gap-4 mt-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershopDB) => (
            <BarbershopItem key={barbershopDB.id} barbershop={barbershopDB} />
          ))}
        </div>
      </div>

    </div>
  );
}