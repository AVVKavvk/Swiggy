import { useEffect, useState } from "react";
import { Cards, ImgUrl } from "../../constant";
import Simmen from "./Simmen";
import { Link } from "react-router-dom";
const Body = () => {
  // const [restarent,s]
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  useEffect(() => {
    getData();
    // console.log("vipin");
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4641869&lng=73.8321627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data?.json();
    setFilterCards(jsonData?.data?.cards[2]?.data?.data?.cards);
    setCards(jsonData?.data?.cards[2]?.data?.data?.cards);
    // FilterCard(jsonData?.data?.cards[2]?.data?.data?.cards,filterValue)
  }
  function FilterCard() {
    const data = cards.filter((item) =>
      item?.data?.name?.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilterCards(data);
    // console.log(data);
  }
  return cards?.length == 0 ? (
    <Simmen />
  ) : (
    <>
      <div class="mt-10 mb-4 flex flex-wrap max-w-[1300px]  mx-auto justify-end gap-4  items-center ">
        <input
          type="text"
          placeholder="Search"
          class="rounded-md  border-2 "
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
        <button class=" bg-gray-200 px-4  py-1 rounded-md" onClick={FilterCard}>
          Search
        </button>
      </div>
      <div class="flex flex-wrap max-w-[1300px]  mx-auto justify-center  items-center gap-5 ">
        {filterCards?.map((card) => {
          return (
        
        
        <Link    key={card.data.id}  to={`/menu/${card?.data?.id}`} >    <div
              class=" hover:border-2 group  w-[300px]   p-4 gap-5 h-[350px] "
           
            >
              <img src={`${ImgUrl}${card?.data?.cloudinaryImageId}`} alt="" />
              <h1 class="font-bold my-1 ">{card?.data?.name}</h1>
              <p class="opacity-70  text-sm w-[230]">
                {card?.data?.cuisines.join(", ")}
              </p>
              <div class="flex text-xs relative justify-between items-center mt-2">
                <div class="flex items-center bg-orange-400   p-1 ">
                  {card?.data?.avgRating} Raitng
                </div>
                <div class="flex items-center   p-1 ">
                  {" "}
                  {card?.data?.slaString}{" "}
                </div>
                <div class="flex   items-center   p-1 ">
                  {" "}
                  {card?.data?.costForTwoString}{" "}
                </div>
              </div>
              <div class=" justify-center mt-4 hidden group-hover:flex items-end mx-auto ">
                <button class="text-blue-500  font-semibold">Quick View</button>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
