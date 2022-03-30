import React from "react";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { DELETE_USER } from "../utils/mutations";

function DeleteUserForm() {
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  const handleDelete = async (e) => {
    await deleteUser();
    Auth.logout();
  };

  return (
    <>
      <form>
        <button onClick={handleDelete}>Delete Account</button>
      </form>
    </>
  );
}

export default DeleteUserForm;
