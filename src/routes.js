import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import {connect} from "react-redux";
import Main from "./modules/main/index"
import BaseComponent from "./modules/baseComponent";
import {history} from "./managers/history";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HeaderBlog from './modules/blog/header';
import AddBlogs from './modules/blog/addBlog';
import CategoryPopup from './modules/blog/categoryPopup';

class Routes extends BaseComponent {

    componentDidMount() {

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Main}/>
                        <Route exact path={'/blog'} component={HeaderBlog}/>
                        <Route exact path={'/add'} component={AddBlogs} />
                        <Route exact path = {'/pop'} component={CategoryPopup} />
                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps)(Routes);
