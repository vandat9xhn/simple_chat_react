import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//
import { Routes } from './__routes/Routes';
//
import './_style/root.scss';
import './_style/App.scss';
import './_style/properties.scss';
import './_style/form.scss';
import './_style/display.scss';
import './_style/position.scss';
import './_style/classes.scss';
import './_style/post.scss';
import './_style/vid_pics.scss';
import './_style/device.scss';
//

//
export interface IAppProps {}

//
export default class App extends React.Component<IAppProps> {
    public render() {
        //
        return (
            <React.Suspense fallback={<div></div>}>
                <BrowserRouter>
                <div className="App">
                    <header className="AppHeader">

                    </header>

                    <main className="AppContent">
                        <Switch>
                            {Routes.map((item, ix) => (
                                <Route
                                    key={`${ix}`}
                                    path={item.path}
                                    component={item.component}
                                    exact={item.exact}
                                />
                            ))}

                            <Redirect to="/login" />
                        </Switch>
                    </main>
                </div>
                </BrowserRouter>
            </React.Suspense>
        );
    }
}
