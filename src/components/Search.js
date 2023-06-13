import { useEffect, useState } from "react";
import { ImgUrl } from "../../constant";

const Search = () => {
  const [itemName, setItemName] = useState("");
  const [searchItem, setSearchItem] = useState("pizza");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getData();
  }, [itemName]);
  async function getData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.4637432&lng=73.83223439999999&str=${searchItem}&trackingId=undefined`
    );
    const jsonData = await data.json();
    console.log(jsonData.data.suggestions);
    setSearchData(jsonData?.data?.suggestions);
  }

  function setFilterData() {
    setItemName(searchItem);
  }
  return (
    <>
      <div class="mt-10 mb-4 flex  flex-col max-w-[1300px]  mx-auto justify-center gap-4  items-center ">
        <div class="flex   mx-auto justify-center   items-center ">
          <input
            type="text"
            placeholder="Search"
            class=" w-[600px] p-1 rounded-md  border-2 "
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            class=" bg-gray-200 px-4    py-1 rounded-md"
            onClick={setFilterData}
          >
            Search
          </button>
        </div>
        <div class="flex flex-col justify-center items-start gap-6 ">
          {searchData?.map((card) => {
            return (
              <div
                class=" hover:bg-gray-200  p-2 flex flex-row gap-5 w-[650px]   justify-start items-center  "
                key={card?.cta?.text}
              >
                {/* {console.log(card?.cloudinaryId)} */}
                <img
                  src={`${ImgUrl}${card?.cloudinaryId}`}
                  alt=""
                  width="100px"
                  height="100px"
                />
                <div>
                  <h1>{card?.cta?.text}</h1>
                  <h2>{card?.subCategory}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
// https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.4637432&lng=73.83223439999999&str=pizza&trackingId=undefined
