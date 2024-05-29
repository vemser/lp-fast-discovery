import { DetailsAccordion } from '../details-accordion/DetailsAccordion';

export function FaqSection() {
  return (
    <section className="flex min-h-[80dvh] bg-blue-bg ">
      <div
        className="flex flex-col justify-center gap-20 my-[15%] h-[100%] w-full px-6
        lg:flex-row
      "
      >
        <div className="flex flex-col gap-6  justify-start max-w-[500px] mb-14 sm:items-center sm:max-w-full sm:text-center
          lg:items-start lg:text-left
        ">
          <span className="text-xs text-brand-darker">FAQ</span>
          <h2 className="text-5xl leading-[3.5rem] font-medium">
            Alguma
            <span className="block text-brand-main">dúvida?</span>
          </h2>

          <p className="text-brand-darker text-base max-w-[500px]">
            Ficou com alguma dúvida sobre a Fast Product Discovery? Confira as
            perguntas mais frequentes realizadas pelos nossos clientes antes do
            processo.
          </p>
        </div>

        <div>
          <DetailsAccordion />
        </div>
      </div>
    </section>
  );
}
