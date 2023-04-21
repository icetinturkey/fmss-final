import { motion } from "framer-motion";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import React, {useState,useEffect} from "react";
import {searchShips} from "../utils/GetData";
import Card from "../components/Card";
import { useQuery } from '@tanstack/react-query';

function SearchPage() {
    const { txt } = useParams();

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['searchers',txt],
        queryFn: searchShips,
    });




    return isPending? (
        <div className="w-8 h-8 animate-spin mx-auto my-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-800 dark:fill-slate-50"><path d="M496 256C496 293.785 487.129 329.438 471.535 361.211C467.527 369.373 457.125 372.121 449.25 367.574L421.447 351.521C414.057 347.254 411.686 338.127 415.322 330.406C425.971 307.795 432 282.609 432 256C432 164.08 361.17 88.393 271.223 80.652C262.732 79.922 256 73.312 256 64.791V32.734C256 23.617 263.668 15.949 272.764 16.576C397.492 25.182 496 129.086 496 256Z"/></svg></div>
    ) : (
        <div className="overflow-hidden py-2">
            <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }}>
                {/* TOP BAR - start */}
                <div className="flex flex-row border-b border-white/40 pb-2">
                    <div className="w-full flex flex-col justify-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-800 dark:fill-slate-200 h-7 w-7 md:h-8 md:w-8">
                                <path d="M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM48 208C48 119.777 119.775 48 208 48S368 119.777 368 208S296.225 368 208 368S48 296.223 48 208Z"/>
                            </svg>
                            <span className="text-gray-800 dark:text-slate-200 text-lg md:text-2xl pl-2">SEARCH SHIPS</span>
                        </div>
                    </div>
                    <div className="w-56 md:w-48 pr-2">
                        <div className="flex justify-end">
                            <div className="select w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-gray-800 dark:fill-slate-50"><path d="M168 392H24C10.8 392 0 402.8 0 416V416C0 429.2 10.8 440 24 440H168C181.2 440 192 429.2 192 416V416C192 402.8 181.2 392 168 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM296 232H24C10.8 232 0 242.8 0 256V256C0 269.2 10.8 280 24 280H296C309.2 280 320 269.2 320 256V256C320 242.8 309.2 232 296 232Z"/></svg>
                                </div>
                                <select className="bg-blue-300/[.3] dark:bg-sky-950/[.8] text-gray-800 dark:text-slate-50">
                                    <option value="0">Name</option>
                                    <option value="1">Rating</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TOP BAR - end */}
                 <br/>
                 <ul>
                     {
                         data && data.results.map((item,i)=>(
                             <li key={i}>{item.name}</li>
                         ))
                     }
                 </ul>
            </motion.div>
        </div>
    );
}

export default SearchPage;