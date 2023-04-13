import axios from "axios";
import { CreateHomeForm } from "../components/form/CreateHome"
import { path_createHome } from "../data/routes";
import { Radio } from "../components/form/input/Radio";
import { Date } from "../components/form/input/Date";
import { Number } from "../components/form/input/Number";

export const CreateHomePage = () => {

  const _createHome = (body) => {
    console.log("body", body);
    axios.post(path_createHome, body)
    .then(async (res) => {
    })
    .catch(err => console.log("err", err));
  }

  return <CreateHomeForm createHome={_createHome}/>
}