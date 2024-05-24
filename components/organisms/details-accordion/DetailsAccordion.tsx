import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../atoms/accordion/Accordion';


export function DetailsAccordion() {
  const faqData = [
    {
      title: 'Quando usar a Fast Product Discovery?',
      description: 'O momento ideal é quando estamos discutindo a fase inicial de um projeto ou produto digital e queremos levantar os principais requisitos dentro de um processo colaborativo junto as áreas interessadas no mesmo.'
    },
    {
      title: 'Qual o tempo total da Fast Product Discovery?',
      description: 'O período completo da Fast Product Discovery é de 14 dias úteis. Nosso processo, envolve 3 dias de Workshops (manhã e tarde) com dinâmicas colaborativas remotas ou presenciais para definir o MVP e neste momento, precisamos da participação de todos os envolvidos no processo para uma entrega assertiva. Demais dias, são de trabalho interno do nosso time de Design e Tecnologia para dar continuidade as demais etapas do nosso processo.',
    },
    {
      title: 'Quais pessoas devem participar?',
      description: 'Todas as pessoas interessadas no sucesso do projeto e que de alguma forma estejam ligadas ao processo de validação, manutenção e condução desta frente estratégica. Sugerimos estar presente, pessoas que representem diferentes áreas ou setores da empresa para que possamos conceber uma solução com diferentes olhares e perspectivas de negócio.'
    },
    {
      title: 'Quantas pessoas podem participar?',
      description: 'Para os três dias de imersão e descoberta junto aos workshops co-criativos, sugerimos de 10 a 12 pessoas por parte do cliente. Do nosso lado DBC, temos Designers e Agilistas facilitando os workshops junto com um time técnico de TI para acompanhar as facilitações e somar na definição das principais funcionalidades técnicas e arquitetura do MVP.'
    },
    {
      title: 'Todos os participantes precisam estar presentes todos os dias dos Workshops?',
      description: 'Sabemos a dificuldade de manter um grupo de profissionais distantes das operações, no entanto, reforçamos a importância de todos estarem presentes nos 3 dias de workshops pois é um processo colaborativo e fomentar as discussões, eleva a qualidade do nosso MVP. Mas não sendo possível, é importante definirmos pessoas chaves como decisores em cada um dos dias, para não impactar o fluxo das entregas.'
    }
  ]

  return (
    <Accordion
      type="single"
      collapsible
      className='flex flex-col gap-6'
    >
      {faqData.map((item, i) => (
        <AccordionItem value={`item-${i}`} key={i}>
        <AccordionTrigger className='focus:outline-brand-darker'>{item.title}</AccordionTrigger>
        <AccordionContent>
          {item.description}
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
  );
}
