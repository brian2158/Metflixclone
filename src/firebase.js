
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth, 
         signInWithEmailAndPassword,  
         signOut} from "firebase/auth"
import { addDoc,
         collection, 
          getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAqkY5wN3wW8JvNHccrK6f7mfaVkipVoyA",
  authDomain: "netflix-clone-cec25.firebaseapp.com",
  projectId: "netflix-clone-cec25",
  storageBucket: "netflix-clone-cec25.appspot.com",
  messagingSenderId: "774677695698",
  appId: "1:774677695698:web:9605701f4cb88bbb78310b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
      const response =  await createUserWithEmailAndPassword(auth,email,password);
      const user =response.user;
      await addDoc(collection(db, "user"),
    {
        uid: user.uid,
        name,
        authProvider: "local",
        email
    })
    }catch(error){
        console.error(error);
       toast.error(error.code.split("/")[1].split('-').join(' '))
    }

}
const login = async (email,password)=>{
    try{
      await signInWithEmailAndPassword(auth,email,password)
    }catch(error) {
  console.log(error)
  toast.error(error.code.split("/")[1].split('-').join(' '))
    }
}
const logout = ()=> {
    signOut(auth)
}

export { auth , db ,login,logout,signup} ;