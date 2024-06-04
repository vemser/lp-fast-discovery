//flex flex-1
export default function MaterialGrid() {
  return (
  <div className='flex max-w-[90%] min-h-[100dvh] py-36 m-auto'>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 w-full min-h-full  gap-8 ">

        <div className="hidden lg:flex flex-col flex-1 gap-8 min-h-full">
          <div className=" bg-blue-200 flex-grow-[0.4]">linha1</div>
          <div className=" bg-blue-200  flex-grow-[0.2]">linha2</div>
          <div className=" bg-blue-200 flex-grow-[0.4]">linha3 (imagem)</div>
        </div>

        <div className="hidden lg:flex flex-col flex-1 gap-8 min-h-full">
          <div className=" bg-blue-400 flex-grow-[0.7]">linha1 (imagem)</div>
          <div className=" bg-blue-400 flex-grow-[0.3]">linha2</div>
        </div>

        <div className="hidden lg:flex flex-col flex-1 gap-8 min-h-full">
          <div className=" bg-blue-400 flex-grow-[0.3]">linha1</div>
          <div className=" bg-blue-400 flex-grow-[0.3]">linha2</div>
          <div className=" bg-blue-400 flex-grow-[0.4]">linha3</div>
        </div>

        <div className="flex flex-col gap-6 lg:hidden">
          <div className=" bg-blue-400 w-full">linha1</div>
          <div className=" bg-blue-400 w-full">linha2</div>
          <div className=" bg-blue-400 w-full">linha3</div>
        </div>
      </div>
    </div>
  );
}
