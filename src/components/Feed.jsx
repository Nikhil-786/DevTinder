import React, { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
const Feed = () => {
  const [userDetails, setUserDetails] = useState("");
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User not Logined In");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="flex justify-end mr-10">
      <h1 className="ml-10">{userDetails.FullName}</h1>
    </div>
  );
};

export default Feed;
