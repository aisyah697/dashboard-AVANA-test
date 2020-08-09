import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//components
import MenuDrawer from "../components/MenuDrawer";

//store
import { getMenu } from "../store/actions/actionMenu";

class Home extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    console.log("cek props", this.props);
    return (
      <div>
        <MenuDrawer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataMenu: state.menu,
});

const mapDispatchToProps = {
  getMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
