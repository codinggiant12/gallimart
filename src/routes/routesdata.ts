import Cart from "../pages/cart/page"
interface RouteProps {
  route: { params: Record<string, any> };
}



export const webroutes:{route:string,component:React.ComponentType<RouteProps> ,additional:String}[]=[
    {
        route:"/cart",
        component:Cart,
        additional:""

    }
]
