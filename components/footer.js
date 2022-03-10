import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";


export default function Footer() {


    return (
        <footer className="flex justify-center bg-primary text-white xl:px-0 md:px-12 px-6 xl:py-24 py-12">
            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
                <Link href='/contact'>
                    <button className="text-white text-sm uppercase hover:text-sand py-1 px-8 border hover:border-sand lg:mt-0 lg:ml-6">
                        Contact
                    </button>
                </Link>
            </div>
        </footer>
    )
}