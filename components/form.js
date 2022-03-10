import {useState} from "react";
import {useRouter} from "next/router";


export const Form = ({ initialRef}) => {

    const initialState = {
        name: '',
        email: '',
        contactMessage: '',
        location:''
    };

    const [formState, setFormState] = useState(initialState);
    const [toastMessage, setToastMessage] = useState({
        type: '',
        message: ''
    });

    const router = useRouter()
    const [campaignState, setCampaignState] = useState(false)

    const clearFormState = () => {
        setFormState({ ...initialState });
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()

        if (router.pathname.startsWith("/campaign/")){
            setCampaignState(true)
        }

        const location = campaignState === true ? 'campaign-usAudit-blueprospect.com' : 'blueprospect.com'
        const endpoint =
            "https://ke37371vfe.execute-api.us-east-1.amazonaws.com/default/sendContactEmail";
        // We use JSON.stringify here so the data can be sent as a string via HTTP
        const body = JSON.stringify({
            senderName: formState.name,
            senderEmail: formState.email,
            message: formState.contactMessage,
            senderLocation: location
        });
        const requestOptions = {
            method: "POST",
            body
        };

        const { name, email, contactMessage} = formState
        const { message } = toastMessage
        if (name && email) {
            try {
                fetch(endpoint, requestOptions)
                    .then((res) => {
                    if (res.status === 200) {
                        setToastMessage({message:(
                                <div className={`${router.pathname.startsWith("/campaign/")  ? 'hidden' : 'block'} absolute bottom-0 text-green-800 -mb-10`}>
                                    Thank you for reaching out to me.  I&apos;ll respond to you shortly!  Have a great day.
                                </div>
                            )});
                        clearFormState();
                    }
                })
            } catch (e) {
                setToastMessage({message:(
                        <div className="text-danger font-bold absolute bottom-0 -mb-10">
                            Deepest apologies.  There was an error with your request.  Please try again later.
                        </div>
                    )})
            }
        } else {
            setToastMessage({message:(
                    <div className="text-danger font-bold absolute -bottom-1 -mb-10 ">
                        Please verify all fields are filled out.
                    </div>
                )})
        }
    };



    return (
        <>
        <form onSubmit={handleContactFormSubmit}>
            <div className="flex flex-col relative">

                {/*show message to user*/}
                {toastMessage.message}

                <div className="flex flex-col">
                    <label
                        className={`${router.pathname.startsWith("/campaign/")  ? 'text-white' : 'text-black'} uppercase tracking-wide text-xs`}>
                        Name*
                    </label>
                    <input
                        ref={initialRef}
                        className="bg-gray-200 text-black border py-3 px-4 mb-4"
                        placeholder="Enter your name"
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className={`${router.pathname.startsWith("/campaign/")  ? 'text-white' : 'text-black'} uppercase tracking-wide text-xs`}>
                        Email*
                    </label>
                    <input
                        className="bg-gray-200 text-black border py-3 px-4 mb-4"
                        placeholder="yourname@email.com"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                        }
                    />
                </div>
                <div className={`${router.pathname.startsWith("/campaign/")  ? 'hidden' : 'block'}`}>
                    <div className="">
                        <label
                            className="uppercase tracking-wide text-xs">
                            Anything else?
                        </label>
                        <div>
                        <textarea
                            className="w-full border border-darkGray py-3 px-4 mb-4 "
                            rows="4"
                            value={formState.contactMessage}
                            onChange={(e) =>
                                setFormState({ ...formState, contactMessage: e.target.value })
                            }
                        />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className={`${router.pathname.startsWith("/campaign/")  ? 'bg-campaignCTA hover:bg-opacity-75 md:text-2xl ' : 'bg-link hover:bg-secondary text-2xl'}  text-white uppercase hover:text-gray-50 py-4 px-8 `}>
                        {`${router.pathname.startsWith("/campaign/")  ? 'Submit your request' : 'Submit'}`}
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}