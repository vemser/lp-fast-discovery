import classNames from "classnames";

interface Cardprops {
  children: React.ReactNode;
  variant: "blueLight" | "blueDark" | "imgBg";
  imgUrl?: string;
}

export default function CardMaterials({
  children,
  variant,
  imgUrl,
}: Cardprops) {
  return (
    <>
      <div
        className={classNames(
          "w-[408px] p-4 rounded-lg shadow-lg",
          {
            "bg-blue-500": variant === "blueLight",
            "bg-blue-200": variant === "blueDark",
            "bg-cover bgpcenter": variant === "imgBg",
          },
          imgUrl && variant === "imgBg" ? `bg-[url('$(imgUrl'))]` : ""
        )}
      >
        {children}
      
      <h2 className="text-4xl font-medium text-white">
            {children}
        </h2>
      </div>
    </>
  );
}
