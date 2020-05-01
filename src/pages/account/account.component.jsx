import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "static/assets/logo.png";
import AccountForm from "../../components/account-form/account-form.component";
import { useWindowSize } from "redux/movies/movies.utils";

const AccountsPage = () => {
  const [windowWidth] = useWindowSize();

  return (
    <div className="sign-in-sign-up">
      <Helmet>
        <body class="light-bg"></body>
      </Helmet>
      <Container>
        <img src={Logo} alt="logo" />
        <div className="form-container">
          <AccountForm />
          <div className="spacing"></div>
        </div>
      </Container>
      <div className="divider-section">
        <div className="divider-inner"></div>
      </div>
    </div>
  );
};

export default AccountsPage;
