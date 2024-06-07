import Image from "next/image";

import peopleIcon from "../../atoms/assets/ecos-icons/people.svg";
import searchIcon from "../../atoms/assets/ecos-icons/search.svg";
import designIcon from "../../atoms/assets/ecos-icons/design.svg";
import devicesIcon from "../../atoms/assets/ecos-icons/devices.svg";
import checkSquareIcon from "../../atoms/assets/ecos-icons/check-square.svg";
import timesheetIcon from "../../atoms/assets/ecos-icons/timesheet.svg";

export function AgileJourneySection() {
  return (
    <section className="flex h-fit w-full flex-1" id="nossa-jornada">
      <div className="flex min-h-[100dvh] w-full flex-col items-start gap-4 bg-brand-main px-6 py-12 lg:px-28 lg:py-36">
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-4 lg:mb-16">
          <span className="text-xs text-white">Nossa Jornada</span>
          <h2 className="mb-20 max-w-[300px] text-center text-2xl font-medium text-white md:text-5xl lg:max-w-[500px] lg:leading-[3.5rem]">
            Acompanhe nossa jornada ágil
          </h2>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%]
        ] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={peopleIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone de uma lupa simples"
                />
                <div className="hidden h-[100px] w-[1px] border border-dashed border-white lg:block"></div>
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Alinhamento
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Realizamos uma reunião inicial com o cliente para entendimento das
              necessidades. Após, compartilhamos um breve questionários com
              algumas perguntas chaves a todos os participantes para um para
              alinhar visões de negócio, compreensão do produto e objetivos para
              o MVP.
            </p>
            <div className="block h-[100px] min-h-24 w-[1px] border border-dashed border-white lg:hidden"></div>
          </div>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={searchIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone de duas pessoas uma do lado da outra"
                />
                <div className="hidden h-[100px] w-[1px] border border-dashed border-white lg:block"></div>
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Definição
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Mapeamos, priorizamos e discutimos as funcionalidades do MVP de
              forma colaborativa, considerando aspectos de negócio, experiência
              de uso e tecnologia.
            </p>
            <div className="block h-[100px] min-h-24 w-[1px] border border-dashed border-white lg:hidden"></div>
          </div>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={designIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone dois quadrados próximos um do outro"
                />
                <div className="hidden h-[100px] w-[1px] border border-dashed border-white lg:block"></div>
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Design
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Começamos o dia introduzindo conceitos de Design para estimular a
              criatividade. Em seguida, analisamos referências de mercado,
              melhores práticas e juntos, priorizamos a jornada ideal para o
              MVP.
            </p>
            <div className="block h-[100px] min-h-24 w-[1px] border border-dashed border-white lg:hidden"></div>
          </div>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={devicesIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone de dois dispositivos, um desktop e um mobile próximos um do outro"
                />
                <div className="hidden h-[100px] w-[1px] border border-dashed border-white lg:block"></div>
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Criação
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Após as imersões iniciais, começamos os estudos visuais para a
              interface, seguindo as melhores práticas de mercado. Validamos os
              resultados e fluxos da jornada escolhida junto ao cliente antes da
              próxima etapa.
            </p>
            <div className="block h-[100px] min-h-24 w-[1px] border border-dashed border-white lg:hidden"></div>
          </div>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={checkSquareIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone de um retangulo com um sinal de aprovação no centro"
                />
                <div className="hidden h-[100px] w-[1px] border border-dashed border-white lg:block"></div>
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Validação
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Estamos validando o protótipo com cinco usuários em testes de
              usabilidade remotos, seguindo a jornada mapeada.
            </p>
            <div className="block h-[100px] min-h-24 w-[1px] border border-dashed border-white lg:hidden"></div>
          </div>
        </div>

        <div className="m-auto flex w-[100%] xl:w-[80%] max-w-[1920px] flex-col gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-4 md:items-center lg:min-h-[164px] lg:flex-row lg:items-start lg:gap-8">
              <div className="flex h-full flex-col items-center lg:gap-2">
                <Image
                  src={timesheetIcon}
                  className="text-2xl lg:text-5xl"
                  alt="ícone de uma folha de papel com um relógio no seu canto inferior direito"
                />
              </div>
              <h3 className="text-xl font-medium text-white md:text-5xl lg:font-light">
                Refinamento
              </h3>
            </div>
            <p className="max-w-[320px] text-base text-white md:max-w-[400px]">
              Finalizamos a Fast Product Discovery. Agora, vamos documentar e
              organizar os entregáveis finais no Notion e compartilhar o link
              com o cliente com tudo que foi gerado em nosso processo
              cocriativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  ); 
}
