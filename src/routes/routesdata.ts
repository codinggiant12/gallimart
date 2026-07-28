import Cart from "../pages/cart/page"
import Home from "../pages/home/page"
import Profile from "../pages/profile/page"
import Sellinfo from "../pages/sellInfoPage/page"
import ProductCategory from "../pages/ProductCategory/page"
import Auth from "../pages/auth/page"
// import AllCategoriesDisplay from "../pages/productpage/page"
interface RouteProps {
  route: { params: Record<string, any> };
}



export const webroutes:{route:string,component:React.ComponentType<RouteProps> ,additional:String}[]=[
     {
        route:"/",
        component:Home,
        additional:""

    },
    {
        route:"/cart",
        component:Cart,
        additional:""

    },
    {
        route:"/profile",
        component:Profile,
        additional:""

    },
    
    {
        route:"/product_category",
        component:ProductCategory,
        additional:""

    },
    {
        route:"/vendor",
        component:Sellinfo,
        additional:""

    },
    {
        route:"/auth/:type",
        component:Auth,
        additional:""

    }
]

// export const categoryRoutes:{route:string,component:React.ComponentType<RouteProps> ,additional:String}[]=[
//   {
//         route:"/product_category/allcategory",
//         // component:AllCategoriesDisplay,
//         additional:""

//     },
// ]
