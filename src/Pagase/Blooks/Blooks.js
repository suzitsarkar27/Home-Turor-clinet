import React from "react";

const Blooks = () => {
  return (
    <div className="row container">
      <h2> Authentication Vs Authorization</h2>
      <div className="com-md-6 card w-75 mx-auto">
        <h2>What is Firebase?</h2>
        <p>
          {" "}
          Firebase is a Backend-as-a-Service — BaaS — that started as a YC11
          startup and grew up into a next-generation app-development platform on
          Google Cloud Platform.
        </p>
        <p>
          1. In authentication process, the identity of users are checked for
          providing the access to the system. While in authorization process,
          person’s or user’s authorities are checked for accessing the
          resources.
        </p>
        <p>
          2. In authentication process, users or persons are verified. While in
          this process, users or persons are validated.
        </p>
        <p>
          3. It is done before the authorization process. While this process is
          done after the authentication process.
        </p>
      </div>
      <div className="col-md-12 card w-75 mx-auto mt-5">
        <h2>Why are you using firebase</h2>
        <p>
          The Firebase Realtime Database is a cloud-hosted database. Data is
          stored as JSON and synchronized in realtime to every connected client.
          When you build cross-platform apps with our Apple platforms, Android,
          and JavaScript SDKs, all of your clients share one Realtime Database
          instance and automatically receive updates with the newest data.
        </p>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
        <h2>what other option important authentication ??</h2>
        <p>
          Password-based authentication. Passwords are the most common methods
          of authentication. ... Multi-factor authentication. ...
          Certificate-based authentication. ... Biometric authentication. ...
          Token-based authentication.
        </p>
      </div>

      <div className="col-md-12 card mx-auto w-75 mt-5">
        <h2>What other service does firebase provide other main</h2>
        <h2>Authentication</h2>
        <p>
          Firebase Auth product provides various methods to authenticate that
          includes email and password. Additionally, more methods are available
          to authenticate 3rd party providers like Google. You can either create
          your own interface or use the open source customizable user interface.
          Firebase offers easy to use SDK and ready-made UI libraries to
          authenticate the apps.
        </p>
        <h2>Real time database</h2>
        <p>
          This feature ensures that the data between the users are stored and
          synchronized in real time with the help of the NoSQL database. When
          you want the app data to remain available even if the app goes
          offline, firebase will be the right choice. It updates the data syncs
          in just a few milliseconds. Firebase for mobile app development is
          scalable and accessible from client devices
        </p>
        <p>
          <h2>Dynamic links</h2>
          With dynamic links, firebase ensures a customized user experience for
          your application across all the platforms. You can use dynamic links
          to drive the native app conversions. The user opening the dynamic link
          will be prompted to install the app in case the application is not
          already installed. By this, many people can install your application
          easily.
        </p>
      </div>
    </div>
  );
};

export default Blooks;
