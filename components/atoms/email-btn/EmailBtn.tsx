import { cn } from "@/utils/tailwindMerge";
import { EnvelopeSimple, Info } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";
import { Id, toast } from "react-toastify";

type EmailBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function EmailBtn({ className, ...rest }: EmailBtnProps) {
  async function handleCopyEmail() {
    const emailValue =
      process.env.EMAIL_CLIPBOARD ?? "contato@dbccompany.com.br";
    navigator.clipboard.writeText(emailValue);

    const emailInClipboard = await navigator.clipboard.readText();
    const isEmailCopyed = emailValue === emailInClipboard;

    if (isEmailCopyed) {
      const toastId = toast(<ToastContainer />, {
        hideProgressBar: true,
        style: { background: "#004BF5" },
        theme: "colored",
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
        className="pr-4 text-white"
        onClick={() => toast.dismiss(toastId)}
      >
        Fechar
      </button>
    );
  }

  return (
    <button
      className={cn(
        "shadow-email-btn-shadow flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand-main text-white transition-all duration-300 hover:bg-brand-dark focus:outline-2 focus:outline-brand-dark active:bg-brand-darker disabled:cursor-not-allowed disabled:bg-gray-dark md:h-[80px] md:w-[80px] ",
        className,
      )}
      onClick={handleCopyEmail}
      aria-label="Botão copiar e-mail para área de transferência"
      {...rest}
    >
      <EnvelopeSimple
        className="text-3xl md:text-5xl"
        alt="ícone de envelope, simbolizando e-mail"
      />
    </button>
  );
}
