import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../assets/btn_google_signin.png";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome p-5 mt-6 text-white items-center justify-center text-center text-2xl break-keep">
      <h2 className="font-semibold">React와 Firebase를 활용한 졸작 웹/앱 배포 연습중....</h2>
      <p>Finale 화이팅</p>
      <p>졸작 웹/앱 배포 연습중....</p>
    </main>
  );
};

export default Welcome;