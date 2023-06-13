const Simmen=()=>{
    return(
        <div class="flex flex-wrap max-w-[1300px]  mt-20 mx-auto justify-center  items-center gap-5 ">
        {Array(10).fill(' ').map((card,index) => {
          return (
            <div
              class=" hover:border-2 group  w-[300px] bg-slate-200   p-4 gap-5 h-[300px] "
              key={index}
            >
              {/* <img src={`${ImgUrl}${card?.data?.cloudinaryImageId}`} alt="" />
              <h1 class="font-bold my-1 ">{card?.data?.name}</h1>
              <p class="opacity-70  text-sm w-[230]">
                {card?.data?.cuisines.join(", ")}
              </p>
              <div class="flex text-xs relative justify-between items-center mt-2">
                <div class="flex items-center bg-orange-400   p-1 ">{card?.data?.avgRating} Raitng</div>
                <div class="flex items-center   p-1 "> {card?.data?.slaString} </div>
                <div class="flex   items-center   p-1 "> {card?.data?.costForTwoString} </div>
              </div>
              <div class=" justify-center mt-4 hidden group-hover:flex items-end mx-auto " >
               
               
              <button class="text-blue-500  font-semibold">Quick View</button>
              </div> */}
            </div>
          );
        })}
      </div>
    )
}
export default Simmen;