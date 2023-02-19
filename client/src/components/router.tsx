import React from "react";
import { Route, Routes } from "react-router";
import Home  from "./home";
import Confession from "./confession";
import Misdemeanour from "./misdemeanour";
import NotFound from "./notfound";
import { Mainlayout } from "./mainlayout";

const ComponentRouter = () =>

    <Routes>

        <Route path="/" element = {<Mainlayout />} >

            <Route index element={<Home />} />
            <Route path="misdemeanour" element={<Misdemeanour />} />
            <Route path="confession" element={<Confession />} />
            <Route path="*" element={<NotFound />} />
    
        </Route>

    </Routes >;

export default ComponentRouter;