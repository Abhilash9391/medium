import { Quote } from "../Components/Quote"
import { Auth } from "../Components/auth"


export const Signin = ()=>{
    return (
        <>
             <div className="grid grid-cols-1 lg:grid-cols-2">
            <div><Auth type={"signin"}></Auth></div>
            <div className = "invisible lg:visible"><Quote></Quote></div>
            
        </div>
        
        </>
    )
}