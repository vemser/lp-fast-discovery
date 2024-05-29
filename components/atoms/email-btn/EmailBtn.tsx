import { cn } from '@/utils/tailwindMerge';
import { EnvelopeSimple, Info } from '@phosphor-icons/react';
import { ButtonHTMLAttributes } from 'react';
import { Id, toast } from 'react-toastify';

type EmailBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function EmailBtn({ className, ...rest }: EmailBtnProps) {
  async function handleCopyEmail() {
    const emailValue =
      process.env.EMAIL_CLIPBOARD ?? 'contato@dbccompany.com.br';
    navigator.clipboard.writeText(emailValue);

    const emailInClipboard = await navigator.clipboard.readText();
    const isEmailCopyed = emailValue === emailInClipboard;

    if (isEmailCopyed) {
      const toastId = toast(<ToastContainer />, {
        hideProgressBar: true,
        style: { background: '#004BF5' },
        theme: 'colored',
        closeButton: () => <ToastButton toastId={toastId} />,
      });
    }
  }

  function ToastContainer() {
    return (
      <div className="flex items-center gap-4 text-white">
        <Info size={32} />
        <span className="text-sm">
          Email copiado para a área de transferência.
        </span>
      </div>
    );
  }

  function ToastButton({ toastId }: { toastId: Id }) {
    return (
      <button
        className="text-white pr-4"
        onClick={() => toast.dismiss(toastId)}
      >
        Fechar
      </button>
    );
  }

  return (
    <button
      className={cn(
        'w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center transition-all duration-300 bg-brand-main text-white hover:bg-brand-dark active:bg-brand-darker disabled:bg-gray-dark disabled:cursor-not-allowed focus:outline-2 focus:outline-brand-dark',
        className
      )}
      onClick={handleCopyEmail}
      {...rest}
    >
      <EnvelopeSimple className='text-3xl md:text-5xl' />
    </button>
  );
}
