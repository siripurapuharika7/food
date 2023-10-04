// import { useState, useRef } from "react";
// import { isvalid } from "./utils.js/Validate";
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./utils.js/firebase";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [issigninform, setissigninform] = useState(true);
//   const[errormessage,seterrormessage]=useState(null);
//   const email = useRef(null);
//   const password = useRef(null);
//   const navigate=useNavigate();

//   const togglesigninform = () => {
//     setissigninform(!issigninform);
//   };

//   const togglebutton = () => {
//     console.log(email.current.value);
//     console.log(password.current.value);
//     const message=isvalid(email.current.value,password.current.value);
//     seterrormessage(message);

//     if(message) return;  // this indicates if error mesage is present code will return means it will start from first if not there it will go down

//     if(!issigninform){
//       //signup logic
// createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user);
//     navigate("/body");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     seterrormessage(errorCode + " "+errorMessage);
    
//   });
//    }
//     else{
//       //signin logic
//       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     navigate("/body");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode+" "+errorMessage);
//   });

//     }
//  };

//   return (
//     <div>
//       {/* <div>
//             <h1 className="bg-black h-24 "></h1>
//         </div> */}
//       <div>
//         <img
//           className="absolute w-full max-h-full "
//           alt="im"
//           src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         />
//       </div>
//       <form
//         className="w-3/12 absolute my-36 mx-auto left-0 right-0 p-12 bg-black bg-opacity-80 text-white"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <h1 className="font-semibold text-2xl py-4">
//           {issigninform ? "Sign in" : "Sign up"}
//         </h1>
//         {!issigninform && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="p-3 my-2 w-full bg-gray-600"
//           />
//         )}

//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className="p-3 my-2 w-full bg-gray-600"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-3 my-2 w-full bg-gray-600"
//         />
//         <p className="text-red-500 py-2 text-lg">{errormessage}</p>
//         <button
//           className="p-3 my-6 rounded-md bg-orange-600 font-semibold text-xl w-full"
//           onClick={() => togglebutton()}
//         >
//           {issigninform ? "Sign in" : "Sign Up"}
//         </button>
//         <p className="mx-8 cursor-pointer" onClick={togglesigninform}>
//           {issigninform
//             ? "New to app? Sign Up Now!"
//             : "Registered? Sign in Now"}
//         </p>
//       </form>
//     </div>
//   );
// };
// export default Login;
