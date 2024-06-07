import CardMaterials from "./CardMaterials";
import Image from "next/image";

import dbcLogo from "../../atoms/assets/logo-dbc/logo-square.svg";
import webImg from "../../atoms/assets/ecos-icons/web.svg";
import figmaImg from "../../atoms/assets/icons/figma.svg";
import linkedinImg from "../../atoms/assets/icons/linkedin.svg";
import youtubeImg from "../../atoms/assets/icons/youtube.svg";
import personAndNotebookImg from "../../atoms/assets/imgs/person-and-notebook.png";
import personAndWhiteboardImg from "../../atoms/assets/imgs/person-and-whiteboard.png";

export default function MaterialGrid() {
  return (
    <>
      <div className="hidden  min-h-[100dvh] 2xl:max-w-[85%] 4k:max-w-[100%] m-auto w-full gap-8 md:grid-cols-1 lg:grid lg:grid-cols-3 overflow-hidden">
        <div className="hidden flex-1 flex-col gap-8 lg:flex">
          <div className="flex max-w-[300px] flex-col gap-6 2xl:max-w-[400px]">
            <h2 className="font-medium lg:text-4xl xl:text-5xl">
              Ficou interessado?
            </h2>
            <p>
              Descubra os materiais da Fast Product Discovery para conhecer
              melhor nosso processo. E nos siga nas redes sociais para
              acompanhar as novidades!
            </p>
          </div>
          <div className="max-h-[200px]">
            <CardMaterials
              variant="blueLight"
              title="DBC Company"
              description="Empresa de tecnologia"
              imgUrl={dbcLogo}
              socialMediaURL="https://www.dbccompany.com.br/"
            />
          </div>
          <div className="relative flex-1">
            <div
              className="absolute z-10 h-full w-full rounded-2xl"
              style={{ background: "rgba(0, 75, 245, 0.25)" }}
            ></div>
            <Image
              src={personAndNotebookImg}
              alt="Uma pessoa está digitando em um notebook"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="hidden flex-col gap-8 lg:flex">
          <div className="relative flex-1">
            <div
              className="absolute z-10 h-full w-full rounded-2xl"
              style={{ background: "rgba(0, 75, 245, 0.25)" }}
            ></div>
            <Image
              src={personAndWhiteboardImg}
              alt="Um homem usando fones de ouvido está escrevendo em um quadro branco"
              className=",ax h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="xl:min-h-[200px]">
            <CardMaterials
              variant="blueLight"
              title="Youtube"
              description="Confira o vídeo sobre a Fast Product Discovery"
              imgUrl={youtubeImg}
              socialMediaURL="https://www.youtube.com/watch?v=1JUXapnk4oE"
            />
          </div>
        </div>

        <div className="hidden flex-col gap-8 lg:flex">
          <CardMaterials
            variant="blueDark"
            title="Blog"
            description="Leia mais artigos sobre a Fast Product Discovery"
            imgUrl={webImg}
            socialMediaURL="https://www.dbccompany.com.br/fast-product-discovery-o-melhor-de-3-praticas-para-criar-um-eficaz-ciclo-de-descobrimento/"
          />

          <CardMaterials
            variant="blueLight"
            title="Linkedin"
            description="Confira novidades sobre a Fast Product Discovery"
            imgUrl={linkedinImg}
            socialMediaURL="https://www.linkedin.com/posts/dbc-company_product-discovery-activity-7187161146016022529-mLyx"
          />

          <CardMaterials
            variant="blueDark"
            title="Figma community"
            description="Descubra nossa comunidade e recursos no Figma"
            imgUrl={figmaImg}
            socialMediaURL="https://www.figma.com/community/file/1114277620744336690"
          />
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="flex w-full flex-col gap-12 pb-9 pt-6 lg:hidden">
        <div className="flex flex-col items-start gap-8 sm:items-center">
          <h2 className="text-2xl font-medium">Ficou interessado?</h2>

          <p className="max-w-[300px] text-left text-sm sm:text-center">
            Descubra os materiais da Fast Product Discovery para conhecer melhor
            nosso processo. E nos siga nas redes sociais para acompanhar as
            novidades!
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:items-center">
          <CardMaterials
            variant="blueLight"
            title="DBC Company"
            description="Empresa de tecnologia"
            imgUrl={dbcLogo}
            socialMediaURL="https://www.dbccompany.com.br/"
          />

          <CardMaterials
            variant="blueDark"
            title="Blog"
            description="Leia mais artigos sobre a Fast Product Discovery"
            imgUrl={webImg}
            socialMediaURL="https://www.dbccompany.com.br/fast-product-discovery-o-melhor-de-3-praticas-para-criar-um-eficaz-ciclo-de-descobrimento/"
          />

          <CardMaterials
            variant="blueLight"
            title="Linkedin"
            description="Confira novidades sobre a Fast Product Discovery"
            imgUrl={linkedinImg}
            socialMediaURL="https://www.linkedin.com/posts/dbc-company_product-discovery-activity-7187161146016022529-mLyx"
          />

          <CardMaterials
            variant="blueDark"
            title="Figma community"
            description="Descubra nossa comunidade e recursos no Figma"
            imgUrl={figmaImg}
            socialMediaURL="https://www.figma.com/community/file/1114277620744336690"
          />

          <CardMaterials
            variant="blueLight"
            title="Youtube"
            description="Confira o vídeo sobre a Fast Product Discovery"
            imgUrl={youtubeImg}
            socialMediaURL="https://www.youtube.com/watch?v=1JUXapnk4oE"
          />
        </div>
      </div>
    </>
  );
}
