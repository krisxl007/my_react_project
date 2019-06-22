import React from 'react'

import NavigationBarStyle from '@/css/navigationbar.scss'

import { NavLink } from 'react-router-dom'

import { Route, Switch } from 'react-router-dom'

import CommentList from '@/components/CommentList'

import MainPanel from "@/css/mainpanel.scss"

export default class NavigationBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <div className={NavigationBarStyle.navigationBarBorder}>
                <header>
                    <ul>
                        <NavLink to="/">Home</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/userProfile">User Profile</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/commentsHall">Comments Hall</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/about">About</NavLink>
                    </ul>
                </header>
            </div>
            <div className={MainPanel.mainPanelStyle}>
                <Switch>
                    <Route path="/" exact render={() => <span>Home...</span>} />
                    <Route path="/userProfile" render={() => <span>Coming soon...</span>} />
                    <Route path="/commentsHall" component={CommentList} />
                    <Route path="/about" render={() => <span>Coming soon...</span>} />
                </Switch>
            </div>
        </div>
    }
}

