import React from 'react'
import SideMenu from './SideMenu'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from '../AsyncComponent'
import Header from './Header'

const AsyncHome = asyncComponent(() => import('../../views/Home'))
const AsyncAbout = asyncComponent(() => import('../../views/About'))
const AsyncUser = asyncComponent(() => import('../../views/User'))
const AsyncForm = asyncComponent(() => import('../../views/Form'))

function Main (props) {
    const {path, url} = props
    return (
        <React.Fragment>
            <Header />
            <div id="container">
                <div id="wrapper">
                    <SideMenu url={url} />
                    <Switch>
                        <Route exact path={`${path}`}>
                            <AsyncHome />
                        </Route>
                        <Route path={`${path}/about`}>
                            <AsyncAbout />
                        </Route>
                        <Route path={`${path}/user`}>
                            <AsyncUser />
                        </Route>
                        <Route path={`${path}/form`}>
                            <AsyncForm />
                        </Route>
                    </Switch>
                </div>
                <footer>
                    <span>pawellin</span>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Main