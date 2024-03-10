

export const NextPayout = ({title, amount, orderCount, secondTitle, date}) => {
    return <div className="bg-[#146eb4] hover:bg-[#0e4f82] rounded-[8px] shadow-sm pt-5"> 
    <div className="text-white pr-4 pl-4">
        <div className="flex pb-3">
            {title}
            <div className="flex mt-1 pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div>

        <div className="flex justify-between pb-5">
            <div className="font-medium text-3xl ">
                {amount}
            </div>

            {orderCount ? <div className="flex mt-1">
                <div className=" font-medium underline">
                {orderCount} Orders
                </div>
                <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div> : null}
        </div>
    </div>
    
    <div className="flex justify-between bg-[#0e4f82] rounded-[8px] text-white pt-2 pb-2 pr-5 pl-5">
        <div>
            {secondTitle}
        </div>
        <div>
            {date}
        </div>
    </div>
</div>
}