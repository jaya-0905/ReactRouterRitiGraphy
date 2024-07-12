import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Capturing Moments, Creating Memories
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="https://www.instagram.com/riti.graphy"
                        >
                            <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
>
                            <path d="M12.004 5.635c-3.51 0-6.369 2.859-6.369 6.369s2.859 6.369 6.369 6.369c3.511 0 6.37-2.859 6.37-6.369 0-3.51-2.859-6.369-6.37-6.369zm0 10.456c-2.26 0-4.087-1.827-4.087-4.087s1.827-4.087 4.087-4.087c2.26 0 4.087 1.827 4.087 4.087s-1.827 4.087-4.087 4.087zm8.102-10.457c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44c.796 0 1.44-.644 1.44-1.44s-.644-1.44-1.44-1.44zm3.634 1.44c0-1.378-.273-2.702-.812-3.96-.535-1.247-1.302-2.342-2.27-3.308-.968-.968-2.061-1.735-3.308-2.27-1.258-.539-2.582-.812-3.96-.812-1.378 0-2.702.273-3.96.812-1.247.535-2.342 1.302-3.308 2.27-.968.968-1.735 2.061-2.27 3.308-.539 1.258-.812 2.582-.812 3.96 0 1.378.273 2.702.812 3.96.535 1.247 1.302 2.342 2.27 3.308.968.968 2.061 1.735 3.308 2.27 1.258.539 2.582.812 3.96.812 1.378 0 2.702-.273 3.96-.812 1.247-.535 2.342-1.302 3.308-2.27.968-.968 1.735-2.061 2.27-3.308.539-1.258.812-2.582.812-3.96zm-2.65 7.603c-.457 1.084-1.073 2.067-1.843 2.837-.768.768-1.751 1.386-2.837 1.843-1.086.457-2.25.68-3.465.68-1.215 0-2.379-.223-3.465-.68-1.086-.457-2.067-1.073-2.837-1.843-.768-.768-1.386-1.751-1.843-2.837-.457-1.086-.68-2.25-.68-3.465s.223-2.379.68-3.465c.457-1.086 1.073-2.067 1.843-2.837.768-.768 1.751-1.386 2.837-1.843 1.086-.457 2.25-.68 3.465-.68 1.215 0 2.379.223 3.465.68 1.086.457 2.067 1.073 2.837 1.843.768.768 1.386 1.751 1.843 2.837.457 1.086.68 2.25.68 3.465s-.223 2.379-.68 3.465z" />
                            </svg>
                              INSTAGRAM
 
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://parspng.com/wp-content/uploads/2022/10/camerapng.parspng.com-2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
               <img className="sm:w-96 w-48" src="https://i.imgur.com/KDK5aa4.jpeg" alt="image2" />
            </div>*/

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Hello, There!!</h1>
            <p className="mt-6 text-gray-600">
            Welcome to my world of photography. With a unique eye for detail and a passion for storytelling, I transform fleeting moments into timeless works of art. Explore the beauty, emotion, and magic I've captured through my lens.</p>
        </div>
    );
}
