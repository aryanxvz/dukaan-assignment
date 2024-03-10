
export const TopBar = ({title}) => {
    return <div className="flex justify-between items-center gap-4 px-8 py-2 border-b border-[#D9D9D9] top-0 bg-[#FFFFFF]">
        <div className="flex pr-[250px]">
            <div className="text-xl font-medium pr-3">
                {title} 
            </div>
            <div className="pt-1.5 pr-1 pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#4D4D4D" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
            </div>
            <div className="text-[#4D4D4D] font-sm text-xs pt-1.5">How it works</div>
        </div>

        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className="bg-transparent outline-none w-full" type="text" placeholder="Search features, tutorials, etc.">
            </input>
        </div>

        <div>
            <div className="flex pl-[250px]">
                <div className="p-1">
                    <button className="flex items-center justify-center bg-[#E6E6E6] w-10 h-10 rounded-full"><img src="src/images/1.webp"></img></button>
                </div>
                <div className="p-1">
                    <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z">
                </path></svg></button></div>
            </div>
        </div>
    </div>
}