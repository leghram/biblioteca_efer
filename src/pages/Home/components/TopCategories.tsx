import Circular from "../../../components/Circular";

const data = [1, 2, 3, 4, 5, 6];

function TopCategories() {
  return (
    <div>
      <h2 className="text-center p-6 text-[1.5rem]">Top Categorias</h2>
      <div className="flex justify-center">
        <div className="w-[80%] flex flex-wrap justify-around ">
          {data.map((_, index) => (
            <Circular key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
