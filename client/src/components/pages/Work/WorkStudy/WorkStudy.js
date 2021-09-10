import React from "react"
import {
    Switch,
    Route,
} from "react-router-dom";

import Page from "../../../Page"
import { OperationalInsights } from "./Studies";

const WorkStudy = () => {

    return (
        <div>
            <Switch>
                <Route url={`work/operational-insights`}>
                    <Page title="CK / Operational Insights">
                        <OperationalInsights />
                    </Page>
                </Route>
            </Switch>
        </div>
    );
}

export default WorkStudy;