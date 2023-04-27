import { Reorder } from "framer-motion";
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from "../components/Card";
import {fetchShips} from "../utils/GetData";
import {useState} from "react";
import {dynamicSort} from "../utils/DynamicSort";

function Home() {
    const [sorting, setSorting] = useState("name");
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['starships'],
        queryFn: fetchShips,
        getNextPageParam: (lastPage, pages) => {
            if(lastPage.next === null){return;}
            return pages.length + 1;
        },
        select: (data) => ({
            total: [...data.pages].flatMap(page => page.results)
        })
    })

    return status === 'loading' ? (
        <div className="w-8 h-8 animate-spin mx-auto my-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-800 dark:fill-slate-50"><path d="M496 256C496 293.785 487.129 329.438 471.535 361.211C467.527 369.373 457.125 372.121 449.25 367.574L421.447 351.521C414.057 347.254 411.686 338.127 415.322 330.406C425.971 307.795 432 282.609 432 256C432 164.08 361.17 88.393 271.223 80.652C262.732 79.922 256 73.312 256 64.791V32.734C256 23.617 263.668 15.949 272.764 16.576C397.492 25.182 496 129.086 496 256Z"/></svg></div>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <div className="overflow-hidden py-2">
                {/* TOP BAR - start */}
                <div className="flex flex-row border-b border-white/40 pb-2">
                    <div className="w-full flex flex-col justify-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-800 dark:fill-slate-200 h-7 w-7 md:h-8 md:w-8">
                                <path d="M445.385 20.375C441.26 17.5 436.51 16 431.635 16C423.635 16 416.262 20 411.762 26.625C407.262 33.125 406.387 41.5 409.262 49C415.262 63.75 418.262 79.625 418.262 95.625C418.262 136.75 399.137 174.5 365.764 199.25C359.891 203.625 356.266 210.25 355.891 217.625C355.516 224.875 358.516 231.875 363.891 236.75C387.639 257.875 401.137 288.25 401.012 320C401.012 342.125 387.514 419 304.02 430.25V358.625L324.768 379.375C330.893 385.5 341.016 385.5 347.266 379.25C353.516 373.125 353.516 363 347.391 356.75L326.643 336H352.016C360.891 336 368.014 328.875 368.014 320S360.891 304 352.016 304H326.643L347.391 283.25C353.516 277.125 353.516 267 347.266 260.75C341.141 254.5 331.018 254.5 324.768 260.75L304.02 281.375V16C304.02 7.125 296.895 0 288.02 0C279.147 0 272.022 7.125 272.022 16V281.375L251.399 260.625C245.149 254.375 234.899 254.375 228.651 260.625C222.401 266.875 222.526 277.125 228.776 283.25L249.399 304H224.026C215.151 304 208.026 311.125 208.026 320S215.151 336 224.026 336H249.399L228.776 356.75C222.526 362.875 222.401 373.125 228.651 379.375C234.899 385.625 245.149 385.625 251.399 379.25L272.022 358.625V430.25C217.276 422.375 174.905 376.5 174.905 320C174.905 288.125 188.403 257.875 212.151 236.75C217.526 231.875 220.526 224.875 220.151 217.625S216.151 203.625 210.401 199.25C176.905 174.5 157.78 136.75 157.78 95.625C157.78 79.625 160.78 63.875 166.655 49C169.655 41.625 168.655 33.25 164.28 26.625C159.78 20 152.28 16.125 144.406 16C139.406 16 134.656 17.625 130.656 20.5C54.787 74.125 12.041 161.375 16.289 254C22.789 394.75 141.656 512 288.02 512C438.01 512 560 390.5 560 241.25C559.875 153.375 517.129 71.125 445.385 20.375ZM288.02 480C142.781 480 60.787 362.375 49.912 268.875L85.535 300C92.16 305.875 102.283 305.125 108.033 298.5S113.158 281.75 106.533 276L48.537 225.25C49.537 213 51.412 200.75 54.162 188.75L84.66 219.25C90.91 225.5 101.033 225.5 107.283 219.25S113.533 202.875 107.283 196.75L64.787 154.125C78.66 118.75 100.783 87.25 129.281 62.25C127.156 73.125 125.906 84.375 125.781 95.5V95.625C125.531 143.5 147.031 189 184.028 219.375C157.78 246.125 143.031 282 142.906 319.375C142.906 399 208.026 463.875 288.02 463.875C360.141 463.875 432.885 407.875 433.01 320C433.135 282.375 418.387 246.125 392.014 219.375C429.01 189 450.383 143.5 450.258 95.625C450.258 84.375 449.133 73.25 446.758 62.25C475.131 87.375 497.256 118.875 511.129 154.25L468.633 196.75C462.383 203 462.383 213.125 468.633 219.25C474.881 225.5 485.006 225.5 491.256 219.25L522.004 188.625C524.629 200.75 526.379 213.125 527.127 225.5L469.508 276C462.758 281.75 462.133 291.875 467.883 298.5C473.756 305.125 483.881 305.875 490.506 300L526.254 268.75C512.504 387.5 411.012 480 288.02 480Z"/>
                            </svg>
                            <span className="text-gray-800 dark:text-slate-200 text-lg md:text-2xl pl-2">ALL SHIPS</span>
                        </div>
                    </div>
                    <div className="w-56 md:w-48 pr-2">
                        <div className="flex justify-end">
                            <div className="select w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-gray-800 dark:fill-slate-50"><path d="M168 392H24C10.8 392 0 402.8 0 416V416C0 429.2 10.8 440 24 440H168C181.2 440 192 429.2 192 416V416C192 402.8 181.2 392 168 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM296 232H24C10.8 232 0 242.8 0 256V256C0 269.2 10.8 280 24 280H296C309.2 280 320 269.2 320 256V256C320 242.8 309.2 232 296 232Z"/></svg>
                                </div>
                                {<select className="bg-blue-300/[.3] dark:bg-sky-950/[.8] text-gray-800 dark:text-slate-50" value={sorting} onChange={(e)=>(setSorting(e.target.value))}>
                                    <option value="name">Name+</option>
                                    <option value="-name">Name-</option>
                                    <option value="hyperdrive_rating">Rating+</option>
                                    <option value="-hyperdrive_rating">Rating-</option>
                                </select>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* TOP BAR - end */}
                <Reorder.Group axis="y" values={data.total} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
                    {data.total.sort(dynamicSort(sorting)).map((ship,i) => (
                        <Card key={ship.name} data={ship} />
                    ))}
                </Reorder.Group>
                <div className="flex justify-center">
                    <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} className="btn-blue mt-4 mb-6">
                        {isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                                ? 'Load More'
                                : 'Nothing more to load'}
                    </button>
                </div>
        </div>
    )
}
export default Home;