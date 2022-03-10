import {useRouter} from "next/router";

// let articlePath;
//
// function articlePathOptions(){
//     const router = useRouter()
//     if (router.pathname === '/articles/[...id].js'){
//         articlePath = '/articles'
//         console.log (router.pathname)
//     } else {
//         articlePath = '/articles'
//     }
// }


const navItems = [
    {
        label: "Services",
        path: "/services",
    },
    {
        label: "Our Work",
        path: "/work",
    },
    {
        label: "Articles",
        path: '/articles',
    },
    {
        label: "About",
        path: "/about",
    }
];

export default navItems