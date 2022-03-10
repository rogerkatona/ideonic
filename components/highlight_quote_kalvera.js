import Image from "next/image";

export default function HighlightQuoteKalvera() {
    return (
        <section className="w-full xl:px-0 md:px-12 px-6 xl:py-24 py-12">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto">
                <div className='flex flex-col flex-shrink-0 mr-24 hidden lg:block'>
                    <img
                        src="/image/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col ">
                <span className="lg:text-3xl text-2xl">
                        &quot;Blue Prospect&apos;s comprehensive user experience audit uncovered significant issues that impacted our prospective customers trying to book our services online. An incredible discovery that increased our online bookings by 15%!&quot;
                    </span>
                    <span className="font-bold text-sm pt-3">
                        Dr. Kalpana Sundar <br/>
                        <span className="font-light">
                            Physician, Entrepreneur, Author, Speaker
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






