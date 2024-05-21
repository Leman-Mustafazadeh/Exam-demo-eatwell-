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
       
    ]
    }
]