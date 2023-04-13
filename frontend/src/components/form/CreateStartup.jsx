import { useState } from "react";
import axios from "axios";

import { SearchDropDown_Category, SearchDropDown_Subcategory } from "./SearchDropdown";
import { path_createStartup } from "../../data/routes";

export const CreateStartupForm = () => {
  const [startupForm, setStartupForm] = useState({});
  // https://dev.to/przpiw/file-upload-with-react-nodejs-2ho7
  const [image, setImage] = useState({ preview: '', data: '' });

  const handleSubmit = async (e) => {

    e.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    const _bodyToSend = {
      ...startupForm,
      selectedFile: "coucou",
      // selectedFile: formData
    };

    axios.post(path_createStartup, _bodyToSend)
    .then(async (res) => {
    })
    .catch(err => console.log("err", err));
    // if (response) setStatus(response.statusText)
  }
  
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img);
  }

  return(
    <form method="POST" onSubmit={handleSubmit} className="flex flex-col form-group">

      <label htmlFor="title">Name</label>
      <input 
        type="text" 
        id="title" 
        onChange={e => setStartupForm({...startupForm, name: e.target.value })}
      />

      <label htmlFor="category">Category</label>
      <SearchDropDown_Category handler={type => setStartupForm({...startupForm, category: type })}/>

      {
        startupForm.category && startupForm.category !== "others"
        ? <>
        <label htmlFor="category">Sub-category</label>
        <SearchDropDown_Subcategory 
          handler={val => setStartupForm({...startupForm, subcategory: val })}
          mainCategory={startupForm.category}
        />
        </>
        : null
      }

      <label htmlFor="description">Description</label>
      <textarea 
        name="description" 
        id="description" cols="10" rows="6"
        onChange={e => setStartupForm({...startupForm, description: e.target.value })}
      >
      </textarea>

      <label htmlFor="price">Price</label>
      <input 
        type="number" 
        id="price" 
        onChange={e => setStartupForm({...startupForm, price: parseInt(e.target.value) })}
      />

      <label htmlFor="file">Image</label>
      <input type='file' name='file' onChange={handleFileChange} />
      {image.preview && <img src={image.preview} width='400' height='400' />}
    
      <button type="submit">GO</button>
    </form>
  );
}

export const Test = () => {
  return( 
    <section class="bg-opacity-50 h-screen">
      <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div class="p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <img
                class="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                src=""
              />

              <h1 class="text-gray-600">My Startup</h1>
            </div>
          </div>
        </div>
        <div class="bg-white space-y-6">
          <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <input
                type="email"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                placeholder="email@example.com"
              />
            
          </div>

          <hr />
          <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label class="text-sm text-gray-400">Full name</label>

                  <input
                    type="text"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Charly Olivas"
                  />

              </div>
              <div>
                <label class="text-sm text-gray-400">Phone number</label>
                 
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="12341234"
                />
              </div>
            </div>
          </div>

          <hr />
          <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">

            <div class="md:w-3/12 text-center md:pl-6">
              <button class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                <svg
                  fill="none"
                  class="w-4 text-white mr-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Update
              </button>
            </div>
          </div>

          <hr />
          <div class="w-full p-4 text-right text-gray-500">
            <button class="inline-flex items-center focus:outline-none mr-4">
              <svg
                fill="none"
                class="w-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}