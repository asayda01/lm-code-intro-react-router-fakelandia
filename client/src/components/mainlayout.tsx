import { Outlet } from "react-router-dom";
import ComponentHeader from "./header";
import ComponentFooter from "./footer";

export const ComponentMainlayout : React.FC = () => 

    <div>

        <ComponentHeader />

            < main >
        
                <Outlet />
        
            </ main >

        < ComponentFooter />

    </div>;
