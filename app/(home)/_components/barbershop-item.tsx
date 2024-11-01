import Image from "next/image"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Barbershop } from "@prisma/client"
import { Service } from "@prisma/client"
import { Button } from "@/app/_components/ui/button"

interface BarberShopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarberShopItemProps) => {
    
    return ( 
    
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-2">
                <div className="relative w-full h-[159px]">
                    <Image src={barbershop.imageUrl} fill alt={barbershop.name} className="rounded-2xl" style={{objectFit: "cover"}}/>
                </div>

                <div>
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-5">Reservar</Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;

