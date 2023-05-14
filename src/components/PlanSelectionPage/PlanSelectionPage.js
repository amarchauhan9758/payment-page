import React from 'react';
import Plans from '../plans/Plans';
import schloarship from "../../images/Group 17.png"
import webinar from "../../images/Group 19.png"
import Live from "../../images/Group 16.png"
import book from "../../images/Group 20.png"
import ads from "../../images/Group 15.png"


const PlanSelectionPage = () => {


    return (
        <>
            <div className='bg-img flex lg:flex-row flex-col lg:justify-evenly   md:h-[100vh] items-center    bg-[#172746]  border border-red-100 px-5' >

                <div  className='text-3xl   text-white' >
                <h1 className='text-4xl font-semibold  font-[Ravely] '>Access curated courses worth</h1>
                <h1 className='text-4xl font-semibold font-[Ravely] '  ><span> ₹ <s> 18,500</s> </span><span>at just ₹ </span><span className='text-[#0096FF]  text-4xl font-bold '>99</span> per year!</h1>
                <div className='mt-12 font-[Roboto] '>
                <div className='my-10 flex gap-12  ' >
                    <img src={book} alt="course"  width="50px" />
                    <h1 className="text-2xl" > <span className='text-3xl font-semibold text-[#0096FF] ' >100+</span> Job relevant courses</h1>
                </div>

                <div className='my-10 flex gap-12  ' >
                    <img src={webinar} alt="course" width="50px"  />
                    <h1 className="text-2xl" > <span className='text-3xl font-semibold text-[#0096FF] ' >20,000+</span>  Hours of content</h1>
                </div>
                <div className='my-10 flex gap-12  ' >
                    <img src={Live} alt="webinar" width="50px"   />
                    <h1 className="text-2xl" > <span className='text-3xl font-semibold text-[#0096FF] ' >Exclusive </span>webinar access</h1>
                </div>
                <div className='my-10 flex gap-12  ' >
                    <img src={schloarship} alt="schloarship" width="50px" />
                    <h1 className="text-2xl" > Scholarship worth <span className='text-3xl font-semibold text-[#0096FF] ' >₹94,500</span></h1>
                </div>
                <div className='my-10 flex gap-12  ' >
                    <img src={ads} alt="schloarship" width="50px" />
                    <h1 className="text-2xl" ><span className='text-3xl font-semibold text-[#0096FF] ' >Ad Free</span> learning experience</h1>
                </div>
                </div>
                </div>

                <div>
                   <Plans/>
                </div>
            </div>
        </>
    )
}

export default PlanSelectionPage;