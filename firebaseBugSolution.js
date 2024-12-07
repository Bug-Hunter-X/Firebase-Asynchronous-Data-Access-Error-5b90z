```javascript
//firebaseBugSolution.js
import {db} from './firebaseConfig'; //Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore';

async function getData(){
  const querySnapshot = await getDocs(collection(db, 'yourCollection'));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;  //Now data is available
}

getData().then(data => {
    console.log('Data:', data);
    //Now safely use the data
}).catch(error => {
    console.error('Error:', error);
});
```