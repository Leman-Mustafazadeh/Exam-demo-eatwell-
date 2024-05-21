import EatCook from "../components/EatCook/index.jsx";
import EatWell from "../components/EatWell/index.jsx";
import Gallery from "../components/Gallery/index.jsx";
import News from "../components/News/index.jsx";
import Offer from "../components/Offer/index.jsx";
import AddDemo from "../pages/AddDemo/index.jsx";
import DemoDetail from "../pages/DemoDetail/index.jsx";
import DemoExam from "../pages/DemoExam.jsx";
import Home from "../pages/Home/index.jsx";

export const ROUTES = [
    {
        path:"/",
        element:<DemoExam/>,
        children:[{
            index:true,
            element:<Home/>
        },
        {
            path:"adddemo",
            element:<AddDemo/>
        },
        {
            path:"demodetail/:id",
            element:<DemoDetail/>
        },
        {
            path:"eatcook",
            element:<EatCook/>
        },
        {
            path:"eatwell",
            element:<EatWell/>
        },
        {
            path:"gallery",
            element:<Gallery/>
        },
        {
            path:"new",
            element:<News/>
        },
        {
            path:"offer",
            element:<Offer/>
        },
       
    ]
    }
]