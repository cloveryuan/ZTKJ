import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import YptInfo from './YptInfo'

interface ProjectProps {
}
class Ypt extends React.Component<ProjectProps> {
    render() {
        return (
            <Switch>
                <Route path="/ypt" exact={true} component={YptInfo} />
            </Switch>
        )
    }
}
export default Ypt;