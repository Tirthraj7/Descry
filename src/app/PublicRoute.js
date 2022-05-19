import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Mainlayout from "../layouts/mainLayout";
import AdminLayout from "../layouts/adminLayout";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  //console.log({rest});
  return (
    <Route
      {...rest}
      component={(props) => {
        //console.log({props})
        if (rest.fulllayout) {
          return (
            <Mainlayout>
              <Component {...props} />{" "}
            </Mainlayout>
          );
        } else {
          return (
            <AdminLayout props={props}>
              <Component {...props} />{" "}
            </AdminLayout>
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  // const isAuthenticated = state.login.loginFlag;
  return {};
};

export default connect(mapStateToProps)(PublicRoute);
