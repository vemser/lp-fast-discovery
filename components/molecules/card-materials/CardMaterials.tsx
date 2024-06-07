import classNames from "classnames";
import Image from "next/image";
import arrowSquareForwardImg from "../../atoms/assets/ecos-icons/arrow-square-forward.svg";

import { AnchorHTMLAttributes } from "react";

type Cardprops = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "blueLight" | "blueDark" | "noBack";
  imgUrl: string;
  title: string;
  description: string;
  socialMediaURL: string;
};

export default function CardMaterials({
  variant,
  imgUrl,
  title,
  description,
  socialMediaURL,
  ...rest
}: Cardprops) {
  return (
    <a
      className={classNames(
        "flex h-full w-full items-start 4k:items-center gap-6 rounded-2xl p-6 2xl:py-12 max-w-[500px] md:max-w-full",
        {
          "bg-brand-main": variant === "blueLight",
          "bg-brand-dark": variant === "blueDark",
          "brand-darker": variant === "noBack",
        },
      )}
      href={socialMediaURL}
      target="_blank"
      rel=""
      {...rest}
    >
      <Image src={imgUrl} alt={title} className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-14 2xl:h-14"/>

      <div className="flex h-full 4k:justify-center flex-1 flex-col gap-4">
        <h2 className="w-full text-lg xl:text-3xl 4k:text-4xl xl:mt-2 font-medium text-white">{title}</h2>

        <p className="max-w-[160px] 4k:max-w-full 2xl:text-lg 2xl:max-w-[200px] 4k:text-2xl text-sm underline lg:text-base">{description}</p>
      </div>

      <div className="flex h-full items-center lg:self-end">
        <Image
          src={arrowSquareForwardImg}
          className="w-6 h-6 4k:w-14 4k:h-14"
          alt="Seta apontando para o canto superior direito envolta de um quadrado"
        />
      </div>
    </a>
  );
}
