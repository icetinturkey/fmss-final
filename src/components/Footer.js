import { motion } from "framer-motion";
import logo from "../resources/logo.png";
function Footer() {
    return(
        <div className="border-t border-white/[.4]">
            <div className="h-14 flex items-center justify-evenly flex-row">
                <motion.a href="https://react.dev" target="_blank" rel="noreferrer" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="h-12 w-48 bg-footer1d dark:bg-footer1n hidden xl:inline" style={{ backgroundImage: "url(" + logo + ")" }}></motion.a>
                <motion.a href="https://ismailcetin.dev" target="_blank" rel="noreferrer" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="h-12 w-48 bg-footer2d dark:bg-footer2n" style={{ backgroundImage: "url(" + logo + ")" }}></motion.a>
                <motion.a href="https://www.patika.dev" target="_blank" rel="noreferrer" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="h-12 w-48 bg-footer3d dark:bg-footer3n hidden lg:inline" style={{ backgroundImage: "url(" + logo + ")" }}></motion.a>
                <motion.a href="https://kodluyoruz.org" target="_blank" rel="noreferrer" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="h-12 w-48 bg-footer4d dark:bg-footer4n hidden md:inline" style={{ backgroundImage: "url(" + logo + ")" }}></motion.a>
                <motion.a href="https://swapi.dev" target="_blank" rel="noreferrer" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="h-12 w-48 bg-footer5d dark:bg-footer5n hidden sm:inline" style={{ backgroundImage: "url(" + logo + ")" }}></motion.a>
            </div>
        </div>
    )
}
export default Footer;