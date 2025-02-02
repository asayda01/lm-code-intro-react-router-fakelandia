import { Route, Routes } from "react-router";
import Home  from "./home";
import Confession from "./confession_folder/confession";
import ComponentMisdemeanour from "./misdemeanour_folder/misdemeanour";
import NotFound from "./notfound";
import { ComponentMainlayout } from "./mainlayout";

const ComponentRouter = () =>

    <Routes>

        <Route path="/" element = {<ComponentMainlayout />} >

            <Route index element={<Home />} />
            <Route path="misdemeanour" element={<ComponentMisdemeanour />} />
            <Route path="confession" element={<Confession />} />
            <Route path="*" element={<NotFound />} />
    
        </Route>

    </Routes >;

export default ComponentRouter;