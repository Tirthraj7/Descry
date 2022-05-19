// import external modules
import React, { lazy } from "react";
import { Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute.js";
import { history } from "../history";
import { setLoginFlag } from '../redux/actions/login/loginAction';

const LazyLogin = lazy(() => import("../views/pages/auth/login"));
const LazyLoginAnimate = lazy(() => import("../views/pages/auth/login_signup"));
const LazyForgotPassword = lazy(() =>
  import("../views/pages/auth/forgotPassword")
);
const LazyReSetPassword = lazy(() =>
  import("../views/pages/auth/resetPassword")
);
const LazySubscription = lazy(() => import("../views/pages/subscription"));
const LazyChange = lazy(() => import("../views/pages/main"));
const LazyWhatsBring = lazy(() => import("../views/pages/whatBrings"));
const LazySelectAvtar = lazy(() => import("../views/pages/selectAvtar"));
const LazyPayment = lazy(() => import("../views/pages/payment"));
const LazySocialMedia = lazy(() => import("../views/pages/socialMedia"));
const LazyDashboard = lazy(() => import("../views/pages/dashboard/dashboard"));
const Lazyeditaccount = lazy(() =>
  import("../views/pages/dashboard/editAccount")
);
const LazyManageConnectedAccount = lazy(() =>
  import("../views/pages/dashboard/manageConnectedAccount")
);
const LazyChangePassword = lazy(() =>
  import("../views/pages/dashboard/changePassword")
);
const Lazysubscription = lazy(() =>
  import("../views/pages/dashboard/subscription")
);

const LazyWhiteLabelBranding = lazy(() =>
  import("../views/pages/dashboard/whiteLabelBranding")
);
const LazyManageUser = lazy(() =>
  import("../views/pages/dashboard/manageUsers")
);

class AppRouter extends React.Component {
  componentDidMount = async () => {
    // console.log('app router')
    this.props.setLoginFlag(true)
    // if (window.location.href === '/login' || window.location.href === 'register' && (localStorage.getItem('user'))) {
    //   history.replace('/')
    // }
    // if (window.location.href !== '/login' || window.location.href !== 'register' && (localStorage.getItem('email'))) {
    //   history.replace('/login')
    // }
  };
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute
            path="/"
            component={LazyDashboard}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PublicRoute
            path="/login"
            component={LazyLoginAnimate}
            exact={true}
            fulllayout={true}
          // isAuthenticated={this.props.login}
          />
          {/* <PublicRoute
            path="/login"
            component={LazyLogin}
            exact={true}
            fulllayout={true}
          /> */}
          <PrivateRoute
            path="/change"
            component={LazyChange}
            exact={true}
            fulllayout={true}
            isAuthenticated={this.props.login}
          />
          <PublicRoute
            path="/forgot-password"
            component={LazyForgotPassword}
            exact={true}
            fulllayout={true}
          />
          <PublicRoute
            path="/reset-password"
            component={LazyReSetPassword}
            exact={true}
            fulllayout={true}
          />
          <PrivateRoute
            path="/subscription"
            component={LazySubscription}
            exact={true}
            fulllayout={true}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/whatsbring"
            component={LazyWhatsBring}
            exact={true}
            fulllayout={true}
          // isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/selectavtar"
            component={LazySelectAvtar}
            exact={true}
            fulllayout={true}
          />
          <PrivateRoute
            path="/payment"
            component={LazyPayment}
            exact={true}
            fulllayout={true}
          />
          <PrivateRoute
            path="/socialmedia"
            component={LazySocialMedia}
            exact={true}
            fulllayout={true}
          />
          <PrivateRoute
            path="/dashboard"
            component={LazyDashboard}
            exact={true}
            fulllayout={false}
          // isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/editaccount"
            component={Lazyeditaccount}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/manageconnectedaccount"
            component={LazyManageConnectedAccount}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/changepassword"
            component={LazyChangePassword}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/subscription"
            component={Lazysubscription}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/whitelabelbranding"
            component={LazyWhiteLabelBranding}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
          <PrivateRoute
            path="/setting/manageuser"
            component={LazyManageUser}
            exact={true}
            fulllayout={false}
            isAuthenticated={this.props.login}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.loginFlag,
  };
};

export default connect(mapStateToProps, { setLoginFlag })(AppRouter);
