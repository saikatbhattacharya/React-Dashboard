import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { SampleActions } from 'actions';

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: () => <div>Loading...</div>,
});

// const RightPanel = Loadable({
//     loader: () => import('./RightPanel'),
//     loading: () => <div>Loading...</div>,
//   });

const AdminComponent = (props) => (
  <div className="admin-container">
    <Dashboard sampleIndex={props.sampleIndex} />
  </div>
);

const mapStateToProps = (state) => ({
    sampleIndex: state.adminReducer.sampleIndex
});

const mapDispatchToProps = dispatch => ({
  addIndex: (number) => {
    dispatch(SampleActions.sampleAction(number))
  }
})

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminComponent);

export default AdminContainer;
