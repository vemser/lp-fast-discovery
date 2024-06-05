import CardMaterials from "./CardMaterials";
import Image from "next/image";

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
            <CardMaterials variant="blueLight">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/logo-cubo.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-5xl font-bold ml-20">DBC Company</span>
                  <span className="mt-4 ml-20 text-[22px] text-white underline">
                    Empresa de tecnologia
                  </span>
                </div>
                <a
                  href="https://www.dbccompany.com.br/"
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="flex-grow-[0.4]">
            <CardMaterials variant="noBack">
              <div
                className="relative h-96 w-full"
                style={{ minHeight: "450px" }}
              >
                <Image
                  src="/imgH.png"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                  alt="DBC"
                />
              </div>
            </CardMaterials>
          </div>
        </div>

        <div className="hidden min-h-full flex-1 flex-col gap-8 lg:flex">
          <div className="flex-grow-[0.7]">
            <CardMaterials variant="noBack">
              <div
                className="relative h-96 w-full"
                style={{ minHeight: "700px" }}
              >
                <Image
                  src="/imgV.png"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                  alt="DBC"
                />
              </div>
            </CardMaterials>
          </div>
          <div className="flex-grow-[0.3]">
          <CardMaterials variant="blueLight">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/youtube.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-5xl font-bold ml-20">YouTube</span>
                  <span className="mt-6 text-[22px] text-white underline ml-20">
                  Assista o vídeo sobre a <br/>
                  Fast Product Discovery
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/@dbc.company"
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
        </div>

        <div className="hidden min-h-full flex-1 flex-col gap-8 lg:flex">
          <div className="flex-grow-[0.3]">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/blog.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-5xl font-bold ml-20">Blog</span>
                  <span className="mt-10 text-[22px] text-white underline ml-20">
                  Leia nosso artigo sobre <br/>
                  a Fast Product Discovery
                  </span>
                </div>
                <a
                  href="https://www.dbccompany.com.br/fast-product-discovery-o-melhor-de-3-praticas-para-criar-um-eficaz-ciclo-de-descobrimento/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="flex-grow-[0.3]">
          <CardMaterials variant="blueLight">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/linkedin.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-5xl font-bold ml-20">Linkedin</span>
                  <span className="mt-10 text-[22px] text-white underline ml-20">
                  Confira nosso post sobre <br/>
                  a Fast Product Discovery
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="flex-grow-[0.4]">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-5xl font-bold ml-20">Figma</span>
                  <span className="mt-12 text-[22px] text-white underline ml-20">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:hidden">
          <div className="w-full"><CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold">Figma</span>
                  <span className="mt-12 text-[18px] text-white underline">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials></div>
          <div className="w-full">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold">Figma</span>
                  <span className="mt-12 text-[18px] text-white underline">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="w-full">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold">Figma</span>
                  <span className="mt-12 text-[18px] text-white underline">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="w-full">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold">Figma</span>
                  <span className="mt-12 text-[18px] text-white underline">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
          <div className="w-full">
          <CardMaterials variant="blueDark">
              <div className="flex w-full items-start p-4 sm:p-8 md:p-12 lg:p-16">
                <Image src="/figma.png" width={58} height={58} alt="DBC" />
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold">Figma</span>
                  <span className="mt-12 text-[18px] text-white underline">
                  Descubra nossa <br/>comunidade e <br/>recursos no Figma.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/company/dbc-company/mycompany/"                  
                  target="_blank"
                  className="ml-auto"
                >
                  <Image src="/open.png" width={32} height={32} alt="Open" />
                </a>
              </div>
            </CardMaterials>
          </div>
        </div>
      </div>
    </div>
  );
}
