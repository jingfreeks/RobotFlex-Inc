import React, {useState} from 'react';
import UserCardList from '../../component/list/card-list';
import {SearchBox} from '../../component/search-box';
import {useDispatch, useSelector } from 'react-redux';
import {fetchRobotsStart} from '../../redux/robots/actions';
import './styles.scss';

const HomePage=()=>{
    const [searchbox,SetSearchBox]=useState(null);
    const [filterData,SetFilterData]=useState([]);
    const dispatch=useDispatch();
    const currentUser = useSelector(state => state.robots.robotsList);
    useState(() => {
      // setData(authStore.experience)
      dispatch(fetchRobotsStart());
    }, []);
    
    const filteredRobots =async(text) =>{
    //   SetFilterData( currentUser.filter(user=>
    //     user.name.toLowerCase().includes(text.toLocaleLowerCase())))


    // SetFilterData(Object.keys(currentUser).filter(key=>{
    //         return currentUser[key].name.toLowerCase().includes(text.toLocaleLowerCase())
    //     }))

      const allowed = Object.keys(currentUser).filter(key=>{
                 return currentUser[key].name.toLowerCase().includes(text.toLocaleLowerCase())
        })
        const filtered = Object.keys(currentUser)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = currentUser[key];
          return obj;
        }, {});

        SetFilterData(filtered);
    }
 
    return(
    <div className='homepage'>
        <h1>Robotex Inc</h1>
        <SearchBox 
          placeholder={'search robbots'}
          handleChange={(event)=>{
            SetSearchBox(event.target.value)
            filteredRobots(event.target.value)
            }}
          value={searchbox} 
        />
        <UserCardList searchData={searchbox ? filterData : currentUser}/>

    </div>
    )
}


export default HomePage;