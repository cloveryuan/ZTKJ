import * as React from 'react';
import same from '../../same/same.scss';
import { Route, Switch } from 'react-router-dom';
import ProjectIndex from './ProjectIndex';
import ProjectDetail1 from './ProjectDetail1';
import ProjectDetail2 from './ProjectDetail2';
import ProjectDetail3 from './ProjectDetail3';
import ProjectDetail4 from './ProjectDetail4';

const Project = ({ match }) => {
    return (
        <div>
            <div className={same.tit}>
                <img
                    src={require('../../img/project/base.jpg')}
                    alt=""
                    style={{ width: '100%', height: '300px' }}
                />
            </div>
            <Switch>
                <Route path="/project" exact={true} component={ProjectIndex} />
                <Route path={`${match.url}/detail1`} exact={true} component={ProjectDetail1} />
                <Route path={`${match.url}/detail2`} exact={true} component={ProjectDetail2} />
                <Route path={`${match.url}/detail3`} exact={true} component={ProjectDetail3} />
                <Route path={`${match.url}/detail4`} exact={true} component={ProjectDetail4} />
            </Switch>
        </div>
    )
}

export default Project;