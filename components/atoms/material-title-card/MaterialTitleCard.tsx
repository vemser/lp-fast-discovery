
interface TitleMaterial {
    children: React.ReactNode;
}

export default function MaterialTitleCard({ children }: TitleMaterial) {
    return(
        <>
        <h2 className="text-4xl font-medium text-white">
            {children}
        </h2>
        </>
    );
}