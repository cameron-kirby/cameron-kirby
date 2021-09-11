import React from "react"
import { Route } from "react-router-dom";

import Page from "../../../Page"
import { OperationalInsights, Dummy } from "./Studies";

const WorkStudy = () => {

    return (
        <div>
            <Route path={"/work/operational-insights"} >
                <Page title="CK / Operational Insights">
                    <OperationalInsights />
                </Page>
            </Route>
            <Route path={"/work/dummy"} >
                <Page title="CK / Dummy Project">
                    <Dummy />
                </Page>
            </Route>
        </div>
    );
}

export default WorkStudy;