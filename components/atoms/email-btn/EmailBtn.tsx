import { ButtonHTMLAttributes } from 'react';

type EmailBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  email?: string;
};

export function EmailBtn({
  children,
  email = 'contato@dbccompany.com.br',
  ...rest
}: EmailBtnProps) {
  function handleCopyEmail() {
    const emailValue = email;
    navigator.clipboard.writeText(emailValue);

    //continuar para disparar alerta ao copiar e-mail
    console.log(navigator.clipboard.readText());
  }

  return (
    <button
      className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-300 bg-brand-main text-white
    hover:bg-brand-dark
    active:bg-brand-darker
    disabled:bg-gray-dark disabled:cursor-not-allowed
    focus:outline-2 focus:outline-brand-dark
  "
      onClick={handleCopyEmail}
      {...rest}
    >
      {children}
    </button>
  );
}
