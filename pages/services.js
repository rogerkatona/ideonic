import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ServiceItem from "../components/serviceItem";
import serviceItems from "../data/serviceItems";
import HeroServices from "../components/hero_services";

export default function Services() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="">
                <section className='max-w-7xl mx-auto py-12 xl:px-0 md:px-12 px-6'>
                    <header>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Services
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500'>
                            We provide UI/UX design services, and social media solutions such as video and podcast content.
                        </div>
                    </header>
                </section>
                <section className='bg-primaryLight bg-opacity-5 w-full'>
                    <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='font-roboto text-4xl tracking-tighter '>Blue Prospect Web Studio</div>
                            <div className="lg:text-2xl text-xl pt-4">UI/UX design, UX audit solutions, and a production studio to create amazing video and audio social media content.
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 md:pb-0 mt-6 ">
                                <ServiceItem serviceItems={serviceItems}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </Layout>
    )
}