import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import AdminLayout from "../layouts/adminLayout";

// Main Layout
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  // console.log('isAuthenticated', JSON.parse(localStorage.getItem('isLogin')))
  return (
    <Route
      {...rest}
      component={(props) =>
        JSON.parse(localStorage.getItem('isLogin')) ? (
          !rest.fulllayout ? (
            <AdminLayout>
              <Component {...props} />
            </AdminLayout>
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
};

const mapStateToProps = (state) => {
  const isAuthenticated = state.login.loginFlag;
  // console.log('in', isAuthenticated)
  return { isAuthenticated };
};

export default connect(mapStateToProps, {})(PrivateRoute);
