import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      //send state as sending request
      const res = await fetch(
        "https://redux-http-37992-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request to database successfully",
        })
      );
      const data = await res.json();
      //send state as a request is successful
    };
    sendRequest().catch((err) => {
      //send state as error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
        })
      );
    });
  }, [cart]);
  return (
    <div className="App">
      {/* <Notification type="success" message={"This is dummy message"} /> */}
      {notification && <Notification message={notification.message} />}
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
