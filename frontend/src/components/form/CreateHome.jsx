import { useState } from "react";
import axios from "axios";

import { SearchDropDown_Category, SearchDropDown_Subcategory } from "./SearchDropdown";
import { path_createHome } from "../../data/routes";
import { Number } from "./input/Number";
import { Date } from "./input/Date";
import { Radio } from "./input/Radio";
import Submit from "./input/Submit";
import TextArea from "./input/TextArea";
import Text from "./input/Text";

export const CreateHomeForm = ({ createHome }) => {
  const [homeForm, setHomeForm] = useState({});
  // https://dev.to/przpiw/file-upload-with-react-nodejs-2ho7
  const [image, setImage] = useState({ preview: '', data: '' });

  const handleSubmit = async (e) => {

    e.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data);

    const _bodyToSend = {
      ...homeForm,
      selectedFile: "coucou",
      // selectedFile: formData
    };
    console.log("bodyTOsend", _bodyToSend);
    createHome(_bodyToSend)
    // if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img);
  }

  console.log(homeForm);
  return <form method="POST" onSubmit={handleSubmit} >
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1>Créer ma vente de logement</h1>
        <Text 
          label="Nom" 
          handler={e => setHomeForm({...homeForm, name: e.target.value }) }
        />
        <Text 
          label="Adresse" 
          handler={e => setHomeForm({...homeForm, address: e.target.value }) }
        />
        <Text 
          label="Ville" 
          handler={e => setHomeForm({...homeForm, city: e.target.value }) }
        />
        <Text 
          label="Region" 
          handler={e => setHomeForm({...homeForm, state: e.target.value }) }
        />
        <TextArea 
          label="Description" 
          handler={e => setHomeForm({...homeForm, description: e.target.value }) }
        />
        <Number 
          label="Chambres" max="20"
          handler={e => setHomeForm({...homeForm, bedrooms: e.target.value }) }
        />
        <Number 
          label="Salle de bains" min="1" max="10"
          handler={e => setHomeForm({...homeForm, bathrooms: e.target.value }) }
        />
        <Number 
          label="Surface" min="3" max="999"
          handler={e => setHomeForm({...homeForm, squareFeet: e.target.value }) }
        />
        <Number 
          label="Prix" min="3" max="999"
          handler={e => setHomeForm({...homeForm, price: e.target.value }) }
        />
        <Date />
        <Submit />
      </div>
    </div>
  </form>
}