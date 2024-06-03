import classNames from "classnames";

interface Cardprops {
  children: React.ReactNode;
  text: string;
  variant: "blueLight" | "blueDark" | "imgBg";
  imgUrl?: string;
}

export default function CardMaterials({
  children,
  variant,
  imgUrl,
  text,
}: Cardprops) {
  return (
    <>
      <div
        className={classNames(
          "w-full p-4 rounded-lg shadow-lg",
          {
            "bg-brand-main": variant === "blueLight",
            "bg-brand-dark": variant === "blueDark",
            "bg-cover bgpcenter": variant === "imgBg",
          },
          imgUrl && variant === "imgBg" ? `bg-[url('$(imgUrl'))]` : ""
        )}
      >      
      
      <h2 className="text-4xl font-medium text-white">
            {children}
        </h2>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
}
