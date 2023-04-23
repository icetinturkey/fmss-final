import { motion } from "framer-motion";
import {Link,useParams} from "react-router-dom";
import React from "react";
import { useQuery } from '@tanstack/react-query';
import {detailShip} from "../utils/GetData";
import ship0 from "../resources/ship0.svg";
import ship1 from "../resources/ship1.svg";
import ship2 from "../resources/ship2.svg";
import ship3 from "../resources/ship3.svg";

function DetailsPage() {
    const { id } = useParams();
    const shipId = id.split("-")[0];
    const { isPending,isFetching, isError, data, error } = useQuery({
        queryKey: ['detailing',shipId],
        queryFn: detailShip,
    });
    let shipLen=0.0;
    let shipName=[];
    if(!isFetching){
        shipLen = parseFloat(data.length.replace(/,/g,''));
        shipName = data.name.split(' ');
    }
    return isFetching ? (
        <div className="w-8 h-8 animate-spin mx-auto my-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-800 dark:fill-slate-50"><path d="M496 256C496 293.785 487.129 329.438 471.535 361.211C467.527 369.373 457.125 372.121 449.25 367.574L421.447 351.521C414.057 347.254 411.686 338.127 415.322 330.406C425.971 307.795 432 282.609 432 256C432 164.08 361.17 88.393 271.223 80.652C262.732 79.922 256 73.312 256 64.791V32.734C256 23.617 263.668 15.949 272.764 16.576C397.492 25.182 496 129.086 496 256Z"/></svg></div>
    ) : (
        <div className="overflow-hidden py-2">
        <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }}>
            {/* TOP BAR - start */}
            <div className="flex flex-row border-b border-white/40 pb-2">
                <div className="w-56 md:w-48 pr-2">
                    <Link to="/" className="back-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-7 w-7 -rotate-90 fill-gray-800 dark:fill-slate-200 mx-auto"><path d="M318.002 145.592C314.189 154.342 305.549 159.998 296.002 159.998H216V487.998C216 501.248 205.25 511.998 192 511.998H24C10.75 511.998 0 501.248 0 487.998S10.75 463.998 24 463.998H168V159.998H88.002C78.455 159.998 69.814 154.342 66.002 145.592S63.924 126.654 70.408 119.67L174.408 7.67C183.906 -2.557 200.096 -2.557 209.596 7.67L313.596 119.67C320.08 126.654 321.814 136.842 318.002 145.592Z"/></svg>
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="fill-gray-800 dark:fill-slate-200 h-7 w-7 md:h-8 md:w-8">
                            <path d="M638.783 216.889L553.125 9.844C549.623 1.719 540.371 -2.156 532.119 1.219L414.84 49.848C406.588 53.223 402.713 62.473 406.088 70.723L409.34 78.473L74.131 241.732C65.879 245.734 61.879 254.984 65.129 262.734L73.895 283.918L9.875 310.438C4.438 312.688 0 319.312 0 325.219C0 326.969 0.562 329.719 1.219 331.344L21.281 379.766C23.531 385.219 30.156 389.641 36.062 389.641C37.812 389.641 40.562 389.094 42.187 388.422L106.172 361.92L114.891 382.992C118.143 390.617 127.395 394.492 136.146 391.492L263.092 347.686C263.293 347.947 263.572 348.141 263.777 348.4L217.322 479.998C212.916 492.498 219.449 506.219 231.951 510.625C234.609 511.562 237.297 512 239.953 512C249.83 512 259.115 505.844 262.584 495.998L305.557 374.266C310.232 375.238 314.998 375.992 319.973 375.992C324.943 375.992 329.797 375.488 334.482 374.529L377.363 495.998C380.832 505.844 390.084 512 399.992 512C402.65 512 405.338 511.562 407.994 510.625C420.498 506.219 427.031 492.498 422.623 479.998L376.195 348.48C385.934 336.199 391.99 320.875 391.99 303.986C391.99 303.727 391.916 303.488 391.914 303.229L488.607 269.859L491.859 277.611C495.234 285.861 504.613 289.736 512.74 286.361L630.143 237.732C638.283 234.359 642.152 225.031 638.783 216.889ZM319.973 327.988C306.738 327.988 295.967 317.221 295.967 303.986S306.738 279.986 319.973 279.986C333.211 279.986 343.979 290.752 343.979 303.986S333.211 327.988 319.973 327.988ZM375.125 258.195C361.918 242.309 342.252 231.982 319.973 231.982C280.867 231.982 249.209 263.193 248.152 302.037L147.65 336.738L121.018 272.359L427.719 122.852L470.229 225.357L375.125 258.195ZM523.992 229.732L462.727 81.85L520.992 57.848L582.256 205.605L523.992 229.732Z"/>
                        </svg>
                        <span className="text-gray-800 dark:text-slate-200 text-lg md:text-2xl pl-2">SHIP DETAIL</span>
                    </div>
                </div>
            </div>
            {/* TOP BAR - end */}
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 p-20">
                    <img src={shipLen<100?ship0:shipLen<1000?ship1:shipLen<10000?ship2:ship3} alt="banner_img" className="dark:invert" />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <div className="grid items-center justify-center dskew mt-0 md:mt-12">
                        <h1 className="title text-slate-600 dark:text-slate-200">
                            {shipName.map((word,i)=>(
                                <span key={i} data-text={word}>{word}</span>
                            ))}
                        </h1>
                    </div>
                    <table className="my-12 w-full rounded-lg bg-slate-50/[.3] border-separate border-spacing-1">
                        <thead>
                        <tr>
                            <th colSpan="2" className="">Specifications</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(data).map((key, index) => {
                            return key!=="name"&&key!=="pilots"&&key!=="films"&&key!=="created"&&key!=="edited"&&key!=="url" ? (
                                <tr key={index}>
                                    <td className="capitalize">{key.replace(/_/g,' ')}</td>
                                    <td className="capitalize font-light">{data[key]}</td>
                                </tr>
                            ):undefined;
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </motion.div>
    </div>
    );
}

export default DetailsPage;