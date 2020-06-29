import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage.component';
import Header from "./component/header/header.component";
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            } 
          });
        });
      }
      this.setState({currentUser: userAuth})

    })
  }
  render() {
    return (
      <div className="App"> 
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;