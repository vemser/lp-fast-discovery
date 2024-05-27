import DefaultTextMenu from "@/components/atoms/default-text-menu/DefaultTextMenu";
import Image from "next/image"; 

export default function BarNav() {
    return (
        <>
            <nav className="flex justify-between items-center p-4 bg-brand-darker">
                <div className="flex items-center">
                    <Image src="/dbc.png" alt="Logo" width={50} height={50} /> 
                </div>
                <div className="ml-auto flex space-x-4">
                    <DefaultTextMenu href="#">Como funciona</DefaultTextMenu>
                    <DefaultTextMenu href="#">Nossa jornada</DefaultTextMenu>
                    <DefaultTextMenu href="#">Benefícios</DefaultTextMenu>
                    <DefaultTextMenu href="#">FAQ</DefaultTextMenu>
                </div>
            </nav>
        </>
    );
}
