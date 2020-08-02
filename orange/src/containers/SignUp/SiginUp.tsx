import React, { useState } from "react";

import { Login, SignUpModal } from "../../components/index";

interface Props {
  history: any;
}

function SignUp(props: Props) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const showModal = () => setShowSignUpModal(true);

  return (
    <div>
      <Login history={props.history} />
      <button onClick={showModal}>회원가입 </button>
      {showSignUpModal ? <SignUpModal history={props.history} /> : null}
    </div>
  );
}

export default SignUp;
