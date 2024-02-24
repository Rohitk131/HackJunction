import React from 'react'
import data from "../static_utils/catering.json"

const FoodContainer = ({cat}) => {
  const filtered = data.filter(obj=>(obj.key.toLocaleLowerCase()).includes(cat.toLocaleLowerCase())) ;
  return (
    <div>
      <div className="cardList flex flex-wrap justify-center">
        {
          filtered.map((ele,index) => {
            return (
              <a href="#" key={index} onClick={()=>{alert("Login to Continue")}}>
                <abbr className="decoration-transparent" title={ele.title}>
                  <div className="flex sm:m-4 sm:block card h-70 hover:scale-110 transition-all hover:shadow-lg p-1 rounded-sm ease-in my-1 items-center border-2 border-[#c6c4c450] sm:border-none gap-3">
                    <img className="menuImg w-auto h-24 sm:w-60 rounded-3xl sm:h-36" src={ele.img}></img>
                    <div className="cardInfo p-2 w-56">
                      <h1 className="Name text-base sm:text-xl font-medium sm:w-56 line-clamp-1"><abbr className="decoration-transparent" title={ele.title}>{ele.title}</abbr></h1>
                      <h4 className="Cusine text-ellipsis text-sm overflow-hidden text-nowrap text-gray-500 font-[Roboto Condensed]]">{ele.key}</h4>
                      <div className="RateInfo flex justify-between my-1 mx-1 font-[Times New Roman] w-30 sm:w-60 overflow-hidden text-nowrap text-ellipsis">
                        <div className="location font-light text-xs ">
                          <p>{ele.addr}</p>
                          <p>{ele.loc}</p>
                        </div>
                        <h4 className=" text-sm font-bold py-1 p-1 sm:text-white sm:mx-3 h-fit rounded-md  sm:bg-green-600">⭐{ele.rating}</h4>
                      </div>
                    </div>
                  </div>
                </abbr>
              </a>
            );
          })
        }
      </div>
    </div>
  )
}

export default FoodContainer
