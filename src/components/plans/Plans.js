import React, { useState } from 'react'
import vector from "../../images/Vector.png"



const plan = [
    { name: 12, price: 8, offer: "Offer expired" },
    { name: 12, price: 15, offer: "Recommended" },
    { name: 6, price: 25, offer: "" },
    { name: 12, price: 33, offer: "" },
];

function Plans() {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);


    const TotalPrice = () => {
        const selectedPlan = plan[selectedPlanIndex];
        return selectedPlan.name * selectedPlan.price;
    };

    const gstAmount = () => {
        const selectedPlan = plan[selectedPlanIndex];
        const result = selectedPlan.name * selectedPlan.price;
        const gst = (result * 18) / 100;
        const totalPrice = result + gst;
        return totalPrice;
    };



    const handlePlanChange = (event) => {
        setSelectedPlanIndex(parseInt(event.target.value, 10));
    };




    return (
        <>
            <div className='px-12  py-12  font-[Roboto]  bg-white rounded-md pb-5' >
                <div className='flex items-center  justify-evenly'>
                    <div className=''>
                        <h1 className='text-[#0096ff]  text-center rounded-full  ' ><button className='bg-blue-500 rounded-full px-2 text-white font-semibold' >1</button></h1>
                        <h1 className='font-semibold text-lg' >Sign Up</h1>

                    </div>
                    <div>
                        <h1 className='text-[#0096ff]  text-center' ><button className='bg-blue-500 rounded-full px-2 text-white font-semibold ' >2</button></h1>
                        <h1 className='font-semibold text-lg' >Subscribe</h1>
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-2xl mt-5 font-semibold' >Select your subcription plan</h1>
                    {plan.map((item, index) => (
                        <div
                            key={index}

                            className={` relative flex items-center text-gray-800 font-semibold text-lg gap-12 my-5 px-5 justify-between  w-full rounded py-2 ${selectedPlanIndex === index ? 'border border-[#47BA68] bg-[#D7EDDD] ' : 'border border-gray-400' }`}
                        >
                            <input
                                type="radio"
                                id={index}
                                name="plan"
                                value={index}
                                checked={selectedPlanIndex === index}
                                onChange={handlePlanChange}

                            />
                            <label className="cursor-pointer" htmlFor={index}>
                                {item.name} Months Subscription
                            </label>
                            <div>
                                <label className="" htmlFor="html">
                                    Total Price: {item.name * item.price}
                                </label>
                                <br />
                                <small>{item.price}</small>
                            </div>
                            <span className={`absolute top-0 left-10 rounded text-white border w-[50%] mx-auto text-center ${item.offer === "Recommended" ? 'border border-[#47BA68] bg-green-500' : 'bg-red-500'}`}>
  {item.offer}
</span>
                        </div>
                    ))}
                </div>
                <hr />

                <div className='mt-5' >

                    <div className='flex  justify-between ' >
                        <h1>Subscribe</h1>
                        Total Price: {TotalPrice()}
                    </div>

                    <div className='bg-red-300 p-5 rounded my-5' >
                        <div>
                            <h1 className='text-[#DE4313] font-semibold' >Limited time offer</h1>
                            <small className='text-[#DE4313] font-semibold flex items-center  gap-2 ' > <span> <img src={vector} alt="vector" width="20px" /> </span>  Offer valid till 25th March 2023 </small>

                        </div>
                    </div>


                    <div className="flex justify-between  items-center " >
                        <h1> <strong className='text-gray-700' >Total</strong> (Incl. 18% of  GST) </h1>
                        <h1 className='text-gray-800 font-semibold text-2xl' >₹{gstAmount()}</h1>
                    </div>

                </div>

                <div className='flex justify-between items-center gap-5  mt-5' >

                    <button className='border border-red-500 text-lg text-[#DE4313]  w-1/2  py-2' >CANCEL</button>
                    <button className='uppercase bg-[#47BA68] text-lg text-white w-1/2 py-2  border-2 '  >Proceed to Pay</button>
                </div>


            </div>

        </>
    )
}

export default Plans