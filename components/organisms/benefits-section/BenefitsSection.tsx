import CardsLp from "@/components/molecules/card-lp/CardsLp";

import managedSquadsIcon from "../../atoms/assets/ecos-icons/managed-squads.svg";
import productivityIcon from "../../atoms/assets/ecos-icons/productivity.svg";
import talkIcon from "../../atoms/assets/ecos-icons/talk.svg";
import checkSquareBlueIcon from "../../atoms/assets/ecos-icons/check-square-blue.svg";
import figmaIcon from "../../atoms/assets/ecos-icons/figma.svg";
import computerIcon from "../../atoms/assets/ecos-icons/computer.svg";

export function BenefitsSection() {
  return (
    <section className="flex h-fit w-full flex-1" id="beneficios">
      <div className="flex min-h-[70dvh] w-full flex-col  items-start gap-4 px-6 py-12 lg:px-28 lg:py-36">
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-4 lg:mb-16">
          <span className="text-xs text-brand-darker">Benefícios</span>
          <h2 className="mb-10 max-w-[300px] text-center text-2xl md:text-4xl font-medium text-brand-darker lg:text-5xl md:max-w-[500px] lg:max-w-[600px] lg:leading-[3.5rem]">
            Trabalhamos com{" "}
            <strong className="text-brand-main">velocidade e precisão</strong>
          </h2>
        </div>

        <div className="grid-cols-cards-galery-sm lg:grid-cols-cards-galery-lg md:grid-cols-cards-galery-md grid w-full justify-items-center justify-center gap-8 md:gap-3 xl:gap-8">
          <CardsLp
            title="Interatividade Elevada"
            alt="ícone de três pessoas próximas uma das outras"
            icon={managedSquadsIcon}
          >
            Uma das partes mais importantes do nosso processo é fomentar os
            debates e melhorias.
          </CardsLp>

          <CardsLp
            title="Superação de desafios"
            alt="ícone de três pessoas próximas uma das outras"
            icon={productivityIcon}
          >
            De forma colaborativa, superamos as incertezas com uma solução
            aderente.
          </CardsLp>

          <CardsLp
            title="Imersão com os Especialistas"
            alt="ícone de um balão de conversa"
            icon={talkIcon}
          >
            Profissionais especialistas participam de todo o processo
            co-criativo.
          </CardsLp>

          <CardsLp
            title="Validação Técnica e Visual"
            alt="ícone de um retângulo com um ícone de aprovação no centro"
            icon={checkSquareBlueIcon}
          >
            Em nosso modelo, garantimos a viabilidade técnica e melhor
            experiência de uso do MVP.
          </CardsLp>

          <CardsLp
            title="Trabalho Contínuo"
            alt="ícone da empresa figma, que é composto por um jogo de esferas próximas uma das outras, representando a letra F."
            icon={figmaIcon}
          >
            Todas as informações geradas em nosso processo é disponibilizado
            para o cliente.
          </CardsLp>

          <CardsLp
            title="Design Centrado nas Pessoas"
            alt="ícone de um laptop ou notebook"
            icon={computerIcon}
          >
            Colocamos as necessidades do negócio e dos usuários, no centro das
            soluções.
          </CardsLp>
        </div>
      </div>
    </section>
  );
}
