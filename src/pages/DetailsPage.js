import { motion } from "framer-motion";
import React from "react";
function DetailsPage() {
    return (
        <div className="overflow-hidden py-2">
        <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }}>
            {/* TOP BAR - start */}
            <div className="flex flex-row border-b border-white/40 pb-2">
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
            <h3>DetailsPage works !</h3>
            <p>Proin maximus leo vel libero dapibus laoreet. Fusce vel magna et massa semper sagittis eget a nulla. Cras libero metus, malesuada quis purus non, maximus malesuada urna. Phasellus vel dui eros. Donec et aliquet turpis, a aliquet odio. Morbi tincidunt ante a sapien ullamcorper, eu placerat risus cursus. Maecenas egestas dictum iaculis. Nulla sit amet sapien eleifend, volutpat dui ac, commodo quam. Suspendisse dignissim purus id tempus finibus. Maecenas blandit nunc in erat pulvinar, in fermentum diam dictum.</p>
            <img src="https://arabam-blog.mncdn.com/wp-content/uploads/2020/12/a2ae6bfb195a800229e7b8402be3c094-1024x681.jpg" alt="araba" />
        </motion.div>
    </div>
    );
}

export default DetailsPage;