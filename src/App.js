import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Homepage } from './pages/homepage/homepage.component';
import Header from "./component/header/header.component";
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }) 
        });
      }
      setCurrentUser (userAuth)

    })
  }
  render() {
    return (
      <div className="App"> 
      <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);