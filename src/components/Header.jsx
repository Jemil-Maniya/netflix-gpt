import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/"); 
      })
      .catch((error) => {
      });
  };

  const handleGptSearch = ()=> {
    
    dispatch(toggleGptSearchView());
    
    
  }

  return (
    <div className=" z-20 flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <button className="my-4 px-4  bg-red-700 text-white rounded-lg cursor-pointer" onClick={handleGptSearch}>GPT Search</button>
          <h1 className="p-6 text-white font-bold">
            Welcome, {user?.displayName || "Guest"}
          </h1>
          <button onClick={handleSignOut} className="font-bold cursor-pointer text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
