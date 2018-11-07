import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from '../Pages/Loading'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "signin"*/ "../Pages/SignIn"),
  loading: () => <Loading />
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile"*/ "../Pages/Profile"),
  loading: () => <Loading />,
  timeout: 1000
});

const NotMatch = Loadable({
  loader: () => import(/* webpackChunkName: "404"*/ "../Pages/NotMatch"),
  loading: () => <Loading />
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard"*/ "../Pages/Dashboard"),
  loading: () => <Loading />
});

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "signup"*/ "../Pages/SignUp"),
  loading: () => <Loading />
});

const ProductList = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/ProductList"),
  loading: () => <Loading />
});

const ContentDetail = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Components/ContentDetail"),
  loading: () => <Loading />
});

const ProductDetail = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/ProductDetail"),
  loading: () => <Loading />
});

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/dashboard/productlist' component={ProductList}/>
      <Route exact path='/dashboard/profile' component={Profile}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route path='/detail/:id' component={ContentDetail}/>
      <Route path='/product/:id' component={ProductDetail}/>
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
