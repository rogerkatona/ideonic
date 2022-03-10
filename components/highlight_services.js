import ServiceItem from "./serviceItem";
import serviceItems from "../data/serviceItems";


export default function HighlightServices() {
    return (
        <>
        <section className="xl:px-0 md:px-12 px-6 xl:py-24 py-12">
            <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className='font-roboto text-4xl tracking-tighter'>Blue Prospect Web Studio</div>
                    <div className="lg:text-3xl text-2xl pt-6">UI/UX design, UX audit solutions, and a production studio to create amazing video and audio social media content.
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 md:pb-0 pt-6">
                        <ServiceItem serviceItems={serviceItems}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}






