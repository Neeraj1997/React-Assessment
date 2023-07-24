import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CounterComponent from "./components/CounterComponent";
import Users from "./components/Users";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/users")
      .then(function (response) {
        if (response.status === 200) {
          setUserDetails(response.data);
          setLoading(false);
        } else {
          setLoading(false);
          setUserDetails([]);
          setError("Some error Occured");
        }
      })
      .catch(function (error) {
        setLoading(false);
        setUserDetails([]);
        setError(
          error.message + " https://fakestoreapi.com/users (please refresh)"
        );
      });
  }, []);

  const [count, setCount] = useState(0);
  const myButtons = [
    { label: "Decrement", backgroundColor: "hover:bg-red-300", action: "sub" },
    { label: "Increment", backgroundColor: "hover:bg-green-300", action: "add" },
  ];
  const onClickHandler = (action) => {
    action === "add" && setCount((prevState) => prevState + 1);
    action === "sub" && setCount((prevState) => prevState - 1);
    return;
  };
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-2">
        React Assessment | Neeraj Minhas
        <a a target="_blank" href="https://www.neerajminhas.com"> (Visit Portfolio)</a>
      </div>
      {error != null && (
        <div className="bg-gradient-to-r from-red-100 to-red-200 p-2">
          {error}
        </div>
      )}

      <div className="mx-auto container">
        <div className=" grid grid-cols-1 text-blue-800 ">
          <div className="grid place-content-center">
            {/* counter class component */}
            <CounterComponent count={count} />
            {/*Button Component*/}
            <ButtonComponent
              myButtons={myButtons}
              onClickHandler={onClickHandler}
            />
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-10 mb-5">User List</p>
        </div>
        {!loading ? (
          <Users key={userDetails?.length} userDetails={userDetails} />
        ) : (
          <div className="animate-pulse ">
            <div>LOADING.....</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
