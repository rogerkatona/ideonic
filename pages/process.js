import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import {useEffect, useState} from "react";
import Date from "../components/date";




export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Portfolio({allPostsData}) {


    const [active, setActive] = useState(false)

    let featuredPosts = allPostsData.filter(function (featured){
        return featured.isFeatured === 'true' && featured.type === 'work'
    })

    useEffect(() => {
        function scrollMove(){
            const link = document.querySelector('Link')
            const mOut = document.addEventListener(mouseout, '')
            if ([link.href === '/articles/:id*']){
                setActive(true)
                return () => {
                    link.removeEventListener("mouseout", handleMouseOut)
                }
            }
        }
    },[active])

    return (
        <Layout home>
            <Head>
                <title>Design Project: {siteTitle}</title>
            </Head>
            <section>
                <header className='max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12'>
                    <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                        Our Work
                    </div>
                    <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                        For over 15 years, Designing digital products that were ahead of their time, across an array of platforms, for the world’s largest, most influential brands, mid-sized companies and extraordinary startups.
                    </div>
                </header>

                <section className='bg-primaryLight bg-opacity-5 w-full '>
                    <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12">
                        {featuredPosts
                            .map(featured =>
                                <div key={featured.id} className='flex flex-col'>
                                    <div className='pt-6'>
                                        <img
                                            className="lg:block hidden"
                                            src={featured.bannerImageSource}
                                            alt={featured.alt}
                                        />
                                        <img
                                            className="lg:hidden block"
                                            src={featured.bannerSMImageSource}
                                            alt={featured.alt}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <Link
                                            href={`/work/${featured.id}`}>
                                            <a>
                                                <div className='font-roboto text-3xl font-medium text-link hover:underline'>{featured.title}</div>
                                            </a>
                                        </Link>
                                        <div className="pt-2">{featured.description} </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </section>
                <section className="max-w-7xl mx-auto">
                    <div className="md:grid md:grid-cols-4 md:gap-4 xl:px-0 md:px-12 px-6">
                        {allPostsData
                            .filter(featured => featured.type === 'work' && featured.isFeatured !== 'true')
                            .map(({ id, date, title, bannerSMImageSource, alt}) => (
                                <div key={id} className="flex flex-col md:py-12 pb-6">
                                    <div className='flex'>
                                        <img
                                            src={bannerSMImageSource}
                                            alt={alt}
                                        />
                                    </div>
                                    <div className="pt-2 md:w-4/5">
                                        <Link href={`/work/${id}`}>
                                            <a>
                                                <div className='font-roboto text font-medium text-link hover:underline truncate'>{title}</div>
                                            </a>
                                        </Link>
                                    </div>

                                </div>
                            ))}
                    </div>
                </section>
            </section>
        </Layout>
    )
}