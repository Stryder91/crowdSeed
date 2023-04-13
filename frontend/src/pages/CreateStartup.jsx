import { useState } from "react";
import { Test,CreateStartupForm } from "../components/form/CreateStartup";

export const CreateStartupPage = () => {
  return(
    <div >
      <h3>Creating a startup</h3>
      <CreateStartupForm />
    </div>
  );
}