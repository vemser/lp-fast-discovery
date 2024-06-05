import classNames from "classnames";

interface Cardprops {
  children: React.ReactNode;
  variant: "blueLight" | "blueDark" | "noBack";
  imgUrl?: string;
}

export default function CardMaterials({
  children,
  variant,  
 
}: Cardprops) {
  return (
    <>
      <div
        className={classNames(
          "w-full p-4 rounded-lg shadow-lg",
          {
            "bg-brand-main": variant === "blueLight",
            "bg-brand-dark": variant === "blueDark", 
            "brand-darker": variant === "noBack",           
          },
         
        )}
      >      
      
      <h2 className="text-4xl font-medium text-white">
            {children}
        </h2>        
      </div>
    </>
  );
}
