import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  .box1,
  .box2 {
    border-radius: 5px;
    margin: auto;
    margin-bottom: 15px;
    background: #fff;
    padding: 25px 25px;
    border: 1px solid #f0f1f4;
    width: 50%;
  }
  .email_status {
    h1 {
      margin: 0 0 5px 0;
      padding-bottom: 0;
      font-weight: 700;
    }
    p {
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      color: #6f7f9b;
    }
    margin-bottom: 10px;
    /* background-color: pink; */
  }
  .how-invitation-works {
    h1 {
      margin: 0 0 5px 0;
      padding-bottom: 0;
      font-weight: 700;
    }
    p {
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      color: #6f7f9b;
    }
  }
`;

function FindMyTeam() {
  return (
    <Container>
      <div className="box1">
        <div className="email_status">
          <h1>Looking for Your Team?</h1>
          <p>Your coach or teammate must send you an email invitation.</p>
          <p>
            <b>
              Enter your email address below to check if an invite has been
              sent.
            </b>
          </p>
          <did className="email_status-form">
            <form>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </did>
        </div>
      </div>
      <div className="box2">
        <div className="how-invitation-works">
          <h1>How Do Team Invitations Work?</h1>
          <div>
            <div>
              <>Icon1</>
              <p>Your Coach or teammate adds you to a team</p>
            </div>
            <div>
              <>Icon1</>
              <p>You receive an invitation via email to join the team</p>
            </div>
            <div>
              <>Icon1</>
              <p>You click a link in the email to accept and join</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FindMyTeam;