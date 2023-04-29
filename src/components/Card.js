import { Link } from "react-router-dom";
import ship0 from "../resources/ship0.svg";
import ship1 from "../resources/ship1.svg";
import ship2 from "../resources/ship2.svg";
import ship3 from "../resources/ship3.svg";
import { Reorder } from "framer-motion";

function Card({data}) {
    const shipLen = parseFloat(data.length.replace(/,/g,''));
    const rating = data.hyperdrive_rating!=="unknown"?parseFloat(data.hyperdrive_rating)*10:0;
    const progress = (parseInt((128*rating)/60)).toString() + "px";
    const shipUrl = data.url.substring(32).replace(/\//g,'')+'-'+data.name.replace(/ /g,'-');

    return(
        <Reorder.Item value={data.name} id={data.name} className="mx-auto relative my-8" dragListener={false}>
        <Link to={`../detail/${shipUrl}`}>
        <div className="z-20 text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-sky-100 left-4 -top-6">
            <img src={shipLen<100?ship0:shipLen<1000?ship1:shipLen<10000?ship2:ship3} className="h-8 w-8" alt="shipicon" />
        </div>
        <div className="head relative bg-slate-50 dark:bg-slate-800 pt-12 px-6 rounded-3xl w-64 shadow-xl">
            <div className="z-20 h-full flex flex-col justify-between pb-4">
                <p className="font-font1 dark:text-slate-50 tracking-widest my-2 text-center">{data.name}</p>
                <div className="text-gray-400 dark:text-slate-300 text-sm">
                    <p className="text-xs text-gray-600 dark:text-slate-100">MODEL</p>
                    <p className="">{data.model}</p>
                </div>
                <div className="text-gray-400 dark:text-slate-300 text-sm my-3">
                    <p className="text-xs text-gray-600 dark:text-slate-100">MANUFACTURER</p>
                    <p className="">{data.manufacturer}</p>
                </div>
                <div>
                    <p className="font-semibold text-base mb-2 dark:text-slate-100">Hyperdrive Rating</p>
                    <div className="text-base text-gray-400 dark:text-slate-200 font-semibold flex justify-between">
                        <div><p>{data.hyperdrive_rating}</p></div>
                        {rating!==0&&(
                            <div className="relative">
                                <div className={`h-6 w-32 bg-slate-200 dark:bg-slate-500 skew-x-[30deg]`}></div>
                                <div style={{width:progress}} className={`absolute skew-x-[30deg] h-6 top-0 bg-blue-900 dark:bg-blue-500`}></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </Reorder.Item>
    )
}
export default Card;