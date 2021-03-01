import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import Routes from './routes/Routes';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const App = (/* { history } */) => {
  return (
    <Switch>
      {/* <Routes history={history} /> */}
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Route path='/' component={() => null} key='1' />
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
  </Layout>
    </Switch>
  );
};

export default withRouter(App);




  
