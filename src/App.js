import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WinPage from "./pages/WinPage";
import Layout from "./shared/Layout";
import NotFound from "./pages/NotFound";
import SimpleTestPage from "./pages/SimpleTestPage";
import {RecoilRoot} from "recoil";

function App() {
    return <RecoilRoot>
        <Router>
            <Layout>
                <Switch>
                    <Route path={"/"} exact={true} component={HomePage}/>
                    <Route path={"/start/:id?"} component={SimpleTestPage}/>
                    <Route path={"/finish"} component={WinPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    </RecoilRoot>
}

export default App;
