import { motion } from "framer-motion";
import sun from '../resources/sun.svg';
import moon from '../resources/moon.svg';
import {useState,useEffect,useRef} from "react";
import { useNavigate,useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const inputElement = useRef();
    if(inputElement.current && location.pathname==="/"){
        inputElement.current.value = "";
    }
    const letters = ['S','T','A','R','W','A','R','S'];
    const [dark, setDark] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('dark')){
            document.body.classList.add('dark');
            setDark(true);
        }
    },[]);
    const changeTheme = () => {
        if(dark) localStorage.removeItem("dark");
        else localStorage.setItem("dark","true");
        document.body.classList.toggle("dark");
        setDark(prev => !prev);
    }
    const doSearch = (e) => {
        e.preventDefault();
        const searched = e.currentTarget.elements.text.value.replace(/ /g,'-');
        navigate("/search/"+searched);
    }
    return (
        <div className="border-b border-white/[.4] grid grid-cols-1 md:grid-cols-6">
            <div className="flex justify-center h-14 col-span-2 pl-0 md:pl-8">
                <div className="flex items-center gap-3">
                    {letters.map((item, index) => (
                        <motion.span animate={{y: [0, -2, 0]}} transition={{delay: index/10, duration: 0.5, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2}} key={index} className="h-10 text-black/[.7] text-2xl dark:text-white/[.9]" style={{fontFamily:"Star Jedi Outline"}}>{item}</motion.span>
                    ))}
                </div>
            </div>
            <div className="h-14 col-span-3 flex flex-col justify-center">
                <form onSubmit={doSearch}>
                    <div className="relative w-11/12 md:w-9/12 lg:w-3/5" style={{margin:"0 auto"}}>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white/[.7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="text" id="text" placeholder="Enter text ..." ref={inputElement} className="w-full rounded-lg focus:outline-none pl-10 pr-20 py-2 bg-black/[.06] dark:bg-black/[.2] text-white/[.9] border border-white/[.7] focus:border-white/[.9] placeholder:text-white/[.7]" required />
                        <button type="submit" className="btn-blue btn-search" >Search</button>
                    </div>
                </form>
            </div>
            <div className="h-14 flex items-center justify-evenly">
                <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} type="button" className="w-6 h-6" onClick={changeTheme}><img className="w-full h-full block" src={dark?sun:moon} alt="" /></motion.button>
                <motion.a href="https://github.com/icetinturkey" target="_blank" rel="noreferrer" className="w-6 h-6" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full block fill-gray-800 dark:fill-slate-200" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                </motion.a>
            </div>
        </div>
    );
}

export default Header;