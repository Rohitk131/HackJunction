import React, { useState } from 'react'
import Navbar from './Navbar'
import { IoFastFood } from 'react-icons/io5'
import FoodContainer from './FoodContainer'


const Catering = () => {
    const [filter, setFilter] = useState("Burgers");
    const categories = [
        {
            "id": 10,
            "name": "Burgers"
        },
        {
            "id": 11,
            "name": "Pizza"
        },
        {
            "id": 2,
            "name": "Beverages"
        },
        {
            "id": 1,
            "name": "North Indian"
        },
        {
            "id": 6,
            "name": "Chinese"
        },
        {
            "id": 14,
            "name": "American"
        },
        {
            "id": 13,
            "name": "Biryani"
        },
    ];
    return (
        <>
            <Navbar />
            <div className='h-screen bg-[#25292A]'>
                <div className='bg-[#25292A] text-white h-auto'>
                    <section className="w-full" id="menu">
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className="text-2xl font-semibold capitalize py-5">Category</p>
                            <div className=' w-max px-20 flex items-center justify-center gap-8 py-6 overflow-x-auto scrollbar-hide'>
                                {
                                    categories && categories.map(category => (
                                        <div
                                            key={category.id} className={`group ${filter === category.name ? "bg-gray-500 bg-opacity-100" : "bg-card"} transition-all w-auto min-w-[100px] px-2 h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-gray-500 hover:bg-opacity-20 `}
                                            onClick={() => setFilter(category.name)}
                                        >

                                            <div
                                                className={`w-10 h-10 rounded-full shadow-lg ${filter === category.name ? "bg-black" : "bg-cartNumBg"} group-hover:bg-white flex items-center justify-center`}>

                                                <IoFastFood
                                                    className={`${filter === category.name ? "text-textColor" : "text-white"} group-hover:text-black text-lg`} />
                                            </div>
                                            <p
                                                className={`text-sm ${filter === category.name ? "text-white" : "text-textColor"} group-hover:text-white`}>{category.name}
                                            </p>
                                        </div>

                                    ))
                                }
                            </div>
                            <div className="w-full">
                                <FoodContainer cat={filter} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export default Catering



