import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/users/selectors';
import { signOutStart } from '../../redux/users/actions';
import {connect} from 'react-redux';

const Header=({currentUser,signOutStart})=>{
    return(
        <div className="header">
            <div className='options'>
                <Link className='option' to="/">
                    HOME
                </Link>
                {
                    currentUser ? 
                    <>
                    <Link className='option' to="/add">
                        ADD RECORDS
                    </Link>
                <div className="option" onClick={signOutStart}>SIGN OUT</div>
                    </>

                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);