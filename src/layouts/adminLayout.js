// import external modules
import React, { useEffect, useState } from "react";

import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import { setadminPanelStatus } from "../redux/actions/adminPanel/adminPanelAction";

import { connect } from "react-redux";
import { Component } from "react";
// import { setSidebarStatus } from "../redux/actions/sidebar/sidebarAction";
class AdminLayout extends Component {
  state = {
    role: "",
  };
  render() {
    return (
      <main className={`admin-panel ${this.props.adminFlag ? "active" : ""}`}>
        <Sidebar />
        <Navbar />
        <div className="admin-layout-wrapper">
          <div className="admin-layout-body">{this.props.children}</div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    adminFlag: state.design.adminPanelFlag,
  };
};
export default connect(mapStateToProps, {
  setadminPanelStatus,
})(AdminLayout);
