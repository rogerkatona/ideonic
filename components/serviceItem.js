// components/ServiceItem.js

const Services = props => (

        <div className="flex md:flex-col flex-row md:items-center">
                <img
                    className="md:block hidden"
                    src={props.src}
                    height={150}
                    width={150}
                    alt={props.alt}
                />
            <div className="flex flex-col items-center 0">
                <div className="lg:text-3xl text-2xl text-secondary pt-4">{props.label}</div>

                <ul className="flex flex-col text-lg text-gray-600 text-left list-disc mt-2 ">
                        {props.list}
                </ul>
            </div>
    </div>
);

const ServiceItem = props => {

    return (

        <>
            {props.serviceItems.map((item) =>
                <Services
                    key={item.src}
                    label={item.label}
                    description={item.description}
                    src={item.src}
                    alt={item.alt}
                    list={
                        item.list.map((list) =>
                                <li key={list.list}>
                                    {list}
                                </li>
                        )
                    }
                />
            )}

        </>
    )
}

export default ServiceItem;
