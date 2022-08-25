import React from "react";

const Feed = () => {
    return (
        <>  <div className="flex flex-col space-y-6">
            <div className="text-xl font-bold">Your region:</div>

            <div class="grid cols-1 md:grid-cols-3 justify-items-center">
                <div class="py-10">
                    <div class="rounded-md overflow-hidden shadow-lg max-w-sm">
                        <img src="https://source.unsplash.com/random/350x200/?mountain" alt="snow-covered-mountain-during-sunrise" class="w-full" />
                        <div class="px-6 py-3 bg-slate-200">
                            <div class="font-bold text-xl mb-2">Mountain</div>
                            <p class="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae quisquam laboriosam
                                incidunt aspernatur adipisci,
                                dignissimos eum. Dolorem, exercitationem aspernatur!</p>
                            <div class="grid grid-cols-3 gap-3">
                                <span class="bg-slate-400 text-black font-semibold px-2 py-2  rounded-md text-center">#cloud</span>
                                <span class="bg-slate-400 text-black font-semibold px-2 py-2  rounded-md text-center">#chill</span>
                                <span class="bg-slate-400 text-black font-semibold px-2  py-2 rounded-md text-center">#climbing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-10">
                    <div class="rounded-md overflow-hidden shadow-lg max-w-sm">
                        <img src="https://source.unsplash.com/random/350x200/?night" alt="snow-covered-mountain-during-sunrise" class="w-full" />
                        <div class="px-6 py-3 bg-slate-200">
                            <div class="font-bold text-xl mb-2">Nights</div>
                            <p class="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae quisquam laboriosam
                                incidunt aspernatur adipisci,
                                dignissimos eum. Dolorem, exercitationem aspernatur!</p>
                            <div class="grid grid-cols-3 gap-3">
                                <span class="bg-slate-400 text-black font-semibold px-2 py-2  rounded-md text-center">#cloud</span>
                                <span class="bg-slate-400 text-black font-semibold px-2 py-2  rounded-md text-center">#chill</span>
                                <span class="bg-slate-400 text-black font-semibold px-2  py-2 rounded-md text-center">#climbing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-10">
                    <div class="rounded-md overflow-hidden shadow-lg max-w-sm">
                        <img src="https://source.unsplash.com/random/350x200/?river" alt="snow-covered-mountain-during-sunrise" class="w-full" />
                        <div class="px-6 py-3 bg-slate-200">
                            <div class="font-bold text-xl mb-2">River</div>
                            <p class="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae quisquam laboriosam
                                incidunt aspernatur adipisci,
                                dignissimos eum. Dolorem, exercitationem aspernatur!</p>
                            <a href="#" className="text-blue-900 font-semibold hover:underline">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Feed