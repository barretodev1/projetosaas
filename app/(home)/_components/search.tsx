"use client";

import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
    return ( 
        <div className="flex items-center gap-2">
            <Input placeholder="Busque por uma barbearia..." className="" />
            <Button variant="default" size="icon">
                <SearchIcon size={20}/>
            </Button>
        </div>
     );
}
 
export default Search;