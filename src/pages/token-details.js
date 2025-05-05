import React from "react";

export default function TokenDetailsPage() {
  // useEffect(() => {
  //   const userLoggedInTime = new Date(localStorage.getItem("loggedIn-Time"));

  //   // console.log({ userLoggedInTime });
  //   const loggedinDate = userLoggedInTime.getDate(),
  //     loggedinHour = userLoggedInTime.getHours(),
  //     loggedinMinute = userLoggedInTime.getMinutes(),
  //     logginSecond = userLoggedInTime.getSeconds();
  //   const currentTime = new Date();
  //   // console.log({ currentTime });

  //   console.log({
  //     seconds: Math.round(
  //       (userLoggedInTime.getTime() - currentTime.getTime()) / (1000 * 3600 * 24)
  //     ),
  //   });
  // }, []);

  return (
    <div>
      Token Expiring in:
      <span>for days</span>
      <span>for hours</span>
      <span>for minutes</span>
      <span>for seconds</span>
    </div>
  );
}
