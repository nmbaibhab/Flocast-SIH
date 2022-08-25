import React from "react";

const Rescue = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-bold my-2 text-indigo-900 leading-loose">Details of Rescue Team</div>
                <div className="p-12  mx-4  shadow-xl rounded-xl md:mx-0">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="fName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fName"
                                            id="fName"
                                            placeholder="First Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="lName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lName"
                                            id="lName"
                                            placeholder="Last Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label
                                    for="guest"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Relief Items
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder="Products"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    for="guest"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Contact No
                                </label>
                                <input
                                    type="text"
                                    name="mobile"
                                    id="lName"
                                    placeholder="Number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    submit="number"
                                />
                            </div>



                            <div>
                                <button
                                    className="hover:shadow-form rounded-md bg-indigo-700 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-indigo-800"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rescue