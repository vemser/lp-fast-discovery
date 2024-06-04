import CardMaterials from "./CardMaterials";

export default function MaterialGrid() {
  return (
    <div className="m-auto flex min-h-[100dvh] max-w-[90%] py-36">
      <div className="grid min-h-full w-full gap-8 md:grid-cols-1 lg:grid-cols-3">
        <div className="hidden min-h-full flex-1 flex-col gap-8 lg:flex">
          <div className="flex-grow-[0.4]">
            <div className="p-4">
              <span className="block text-[42px] font-medium leading-[56px] text-white">
                Ficou
              </span>
              <span className="block text-[42px] font-medium leading-[56px] text-white">
                interessado?
              </span>
            </div>
            <div className="whitespace-pre-line p-4 text-[16px] font-normal">
              <span className="block">
                Descubra os materiais da Fast Product Discovery
              </span>
              <span className="block">
                para conhecer melhor nosso processo.
              </span>
              <span className="block">
                E nos siga nas redes sociais para acompanhar as novidades!
              </span>
            </div>
          </div>
          <div className="flex-grow-[0.2]">
            <CardMaterials variant="blueLight" text="Empresa de tecnologia">DBC Company</CardMaterials>
          </div>
          <div className="flex-grow-[0.4] bg-blue-200">linha3 (imagem)</div>
        </div>

        <div className="hidden min-h-full flex-1 flex-col gap-8 lg:flex">
          <div className="flex-grow-[0.7] bg-blue-400">
            <CardMaterials variant="imgBg" text=""></CardMaterials>
          </div>
          <div className="flex-grow-[0.3] bg-blue-400">linha2</div>
        </div>

        <div className="hidden min-h-full flex-1 flex-col gap-8 lg:flex">
          <div className="flex-grow-[0.3] bg-blue-400">linha1</div>
          <div className="flex-grow-[0.3] bg-blue-400">linha2</div>
          <div className="flex-grow-[0.4] bg-blue-400">linha3</div>
        </div>

        <div className="flex flex-col gap-6 lg:hidden">
          <div className="w-full bg-blue-400">linha1</div>
          <div className="w-full bg-blue-400">linha2</div>
          <div className="w-full bg-blue-400">linha3</div>
        </div>
      </div>
    </div>
  );
}
