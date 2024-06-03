import CardMaterials from "@/components/molecules/card-materials/CardMaterials";

export default function MoreMaterialsSection() {
    return (
        <>
            <div className="min-h-screen bg-brand-darker p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full h-full">
                    <div className="lg:col-span-1">
                        <h1 className="text-4xl">Teste</h1>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <CardMaterials variant="blueLight" text="Este é um exemplo de card com fundo azul claro.">
                            Título do card azul Claro
                        </CardMaterials>
                        <CardMaterials variant="blueDark" text="Este é um exemplo de card com fundo azul escuro.">
                            Título do card azul Escuro
                        </CardMaterials>
                        <CardMaterials 
                            variant="imgBg"
                            imgUrl="https://via.placeholder.com/408x200"
                            text="Este é um exemplo de card com uma imagem de fundo."
                        >
                            Título do Card com Imagem
                        </CardMaterials>
                        <CardMaterials variant="blueLight" text="Outro exemplo de card com fundo azul claro.">
                            Outro Título do card azul Claro
                        </CardMaterials>
                        <CardMaterials variant="blueDark" text="Outro exemplo de card com fundo azul escuro.">
                            Outro Título do card azul Escuro
                        </CardMaterials>
                        <CardMaterials 
                            variant="imgBg"
                            imgUrl="https://via.placeholder.com/408x200"
                            text="Outro exemplo de card com uma imagem de fundo."
                        >
                            Outro Título do Card com Imagem
                        </CardMaterials>
                        <CardMaterials variant="blueLight" text="Mais um exemplo de card com fundo azul claro.">
                            Mais um Título do card azul Claro
                        </CardMaterials>
                    </div>
                </div>
            </div>
        </>
    );
}
