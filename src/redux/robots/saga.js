import {put, takeEvery,call,all} from 'redux-saga/effects';
import {UserActionTypes} from './actiontypes';
import {fetchRobotsSuccess,fetchRobotsFailure} from './actions';
import {
    firestore,
    convertCollectionsSnapshotToMap
  } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsnyc(){
    try{
        const robotscollection=firestore.collection('robots');
        const snapshot = yield robotscollection.get();
        const collectionMap=yield call(
            convertCollectionsSnapshotToMap,
            snapshot
          );
        
       yield console.log('collectionMap',collectionMap)
         yield put(fetchRobotsSuccess(collectionMap));
        // const fetchData=yield fetch('https://jsonplaceholder.typicode.com/users')
        
        // const  data =yield fetchData.json();
       
        //  console.log('data',data);
    }catch(error){
        fetchRobotsFailure(error.message);
    }

}

export function* registerobots({ payload: { email,name,username } }) {
    try {
         yield firestore.collection('robots').add({
            email,
            name,
            username,
        });
        // yield put(signUpSuccess({ user, additionalData: { displayName } }));
      } catch (error) {
        // yield put(signUpFailure(error));
      }
}

export function* deleteRobotRecords({ payload}) {
    try {
        yield console.log('idddd',payload.Id)
        yield firestore.collection('robots').doc(payload.Id).delete()
        yield call(fetchCollectionsAsnyc);
        // const { user } = yield firestore.collection('robots').add({
        //     email,
        //     name,
        //     username,
        // });
        // yield put(signUpSuccess({ user, additionalData: { displayName } }));
      } catch (error) {
        console.log('errorsss',error)
      }
}

export function* fetchRobotsrStart(){
    yield takeEvery(UserActionTypes.FETCH_ROBOTS_START,fetchCollectionsAsnyc);
}

export function* registerrobotstart(){
    yield takeEvery(UserActionTypes.ADD_ROBOTS_START,registerobots);
}

export function* deleterobotStart(){
    yield takeEvery(UserActionTypes.DELETE_ROBOTS_START,deleteRobotRecords);
}
export function* robotSaga() {
    yield all([
        call(fetchRobotsrStart),
        call(registerrobotstart),
        call(deleterobotStart),
        // call(onSignUpStart),
        // call(onSignUpSuccess)
    ]);
}