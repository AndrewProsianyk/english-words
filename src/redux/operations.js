
// import { collection, getDocs, getFirestore, setDoc, doc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";
// import { getIsLoggedIn, getCurrentUserID } from './redux/auth/user-selectors';

// import { useSelector } from 'react-redux';


// const currentUserId = useSelector(getCurrentUserID)

// const getDataCollection = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const users = []
//     querySnapshot.forEach((doc) => {
//         users.push(doc.data())
//     });
//     users.find(user =>
//         user.id === currentUserId ? console.log(user.themes) : null
//     )
// }
// getDataCollection()