import CardMaterials from "@/components/molecules/card-materials/CardMaterials";


export default function MoreMaterialsSection() {
    return(
        <>
        
        <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-brand-darker p-8">
          <h1>Teste</h1>
      <CardMaterials variant="blueLight" text="Este é um exemplo de card com fundo azul claro.">
        Título do card azul Claro
      </CardMaterials>
      <CardMaterials variant="blueDark" text="Este é um exemplo de card com fundo azul escuro.">
        Título do card czul Escuro
      </CardMaterials>
      <CardMaterials
        variant="imgBg"
        imgUrl="https://via.placeholder.com/408x200"
        text="Este é um exemplo de card com uma imagem de fundo."
      >
        Título do Card com Imagem
      </CardMaterials>
    </div>
        </>
    );
}