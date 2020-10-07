import React,{Component} from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Header from './component/header';
import HomePage from './pages/home';
import SignInSignUpPage from './pages/Sign-in-Sign-up';
import Addrecord from './pages/add';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/users/actions';
import { selectCurrentUser } from './redux/users/selectors';
// import { setCurrentUser } from  './redux/users/actions';
class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchField:'',
    }
  }
  unsubscribeFormAuth=null;

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();

  }
  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }

  render(){
    return (
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/add' component={Addrecord} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);