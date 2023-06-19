import uno from "../assets/images/uno.jpg";

function Circular() {
  return (
    <div className="w-[250px] h-[280px] flex items-center justify-center flex-col">
      <img
        src={uno}
        className="w-[220px] h-[220px] rounded-full bg-red-600 hover:w-[200px] hover:h-[200px]"
      />
      <p className="font-bold p-4">Nombre</p>
    </div>
  );
}

export default Circular;
