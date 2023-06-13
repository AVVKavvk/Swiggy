import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi";
import { ImgUrl } from "../../constant";
const Menu = () => {
  const [currData, setCurrData] = useState({});
  const [nextData, setNextData] = useState([]);
  const [offerData, setOfferData] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4641869&lng=73.8321627&restaurantId=${id}&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );

    setCurrData(jsonData?.data?.cards[0]?.card?.card?.info);
    setOfferData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    setNextData(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  }

  return (
    <>
      {
        <>
          <div class="flex max-w-[800px] mx-auto mt-8 justify-between items-center">
            <div class="flex flex-col justify-center items-start ">
              <h1 class="font-bold mb-2">{currData?.name}</h1>
              <h5 class="opacity-60 text-xs">
                {currData?.cuisines?.join(", ")}
              </h5>
              <h5 class="opacity-60 text-xs">
                {currData?.areaName} , {currData?.sla?.lastMileTravelString}
              </h5>
            </div>
            <div class="flex flex-col border-2   justify-center  items-center p-2 space-y-3 ">
              <h2 class="bg-green-300 px-2 rounded-md py-1">
                {currData?.avgRatingString} Star
              </h2>

              {/* <hr /> */}
              <h2 class="">{currData?.totalRatingsString} </h2>
            </div>
          </div>

          <div class="max-w-[800px] h-1 bg-gray-300  mt-8 mx-auto " />
          <div class="flex max-w-[800px] mx-auto mt-7 ">
            <div class="flex justify-center items-center gap-10">
              <h1 class="flex  justify-center items-center gap-3">
                {" "}
                <AiFillClockCircle size={25} /> {currData?.sla?.deliveryTime}{" "}
                MINS
              </h1>
              <h1 class="flex  justify-center items-center gap-3">
                {" "}
                <HiCurrencyRupee size={25} /> {currData?.costForTwoMessage}{" "}
              </h1>
            </div>
          </div>
        </>
      }
      {
        <div class="flex max-w-[800px] mx-auto mt-8 justify-start space-x-2 items-center">
          {offerData?.map((item) => {
            return (
              <div
                class="max-w-[200px] border-2 p-2 rounded-lg gap-4 space-y-3 "
                key={item?.info?.header}
              >
                <h1 class="text-sm ">{item?.info?.header}</h1>
                <h5 class="text-xs opacity-70 ">
                  {item?.info?.couponCode} , {item?.info?.description}
                </h5>
              </div>
            );
          })}
        </div>
      }
      {
        <h1 class="flex max-w-[800px] mx-auto mt-8 justify-start  items-center">
          {" "}
          {currData?.veg ? "Veg Pure" : "Non Veg"}
        </h1>
      }

      <div class="max-w-[800px] h-1 bg-gray-400   mt-10 mx-auto  " />

      {
        <div class="flex max-w-[800px] flex-col mx-auto mt-5 justify-start  items-start">
          <h1 class="font-bold text-2xl mb-5">
            Recommended ({nextData.length}){" "}
            <span class="font-normal text-lg ml-9 opacity-80">Pure Veg</span>
          </h1>
          {nextData?.map((item) => {
            return (
              <div
                key={item?.card?.info?.id}
                class="flex w-[800px] flex-col justify-between items-center mt-3"
              >
                <div class="flex w-[800px]  flex-row justify-between items-center mt-3">
                  <div class="flex flex-col justify-between items-between mt-3">
                    <h1>{item?.card?.info?.name}</h1>
                    <h1>₹ {item?.card?.info?.price / 100}</h1>
                  </div>
                  <div>
                    <img
                      src={`${ImgUrl}${item?.card?.info?.imageId}`}
                      alt=""
                      width="100px"
                      heigth="100px"
                    />
                  </div>
                </div>
                <div class="w-[800px] h-1 bg-gray-200   mt-10 mx-auto  " />

              </div>
            );
          })}
        </div>
      }
    </>
  );
};
export default Menu;
