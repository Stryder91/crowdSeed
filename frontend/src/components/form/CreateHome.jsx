import { useState } from "react";
import axios from "axios";

import { SearchDropDown_Category, SearchDropDown_Subcategory } from "./SearchDropdown";
import { path_createHome } from "../../data/routes";

// export const  = () => {


//   return (
//     <form method="POST" onSubmit={handleSubmit} className="flex flex-col form-group">

//       <label htmlFor="title">Name</label>
//       <input
//         type="text"
//         id="title"
//         onChange={e => setHomeForm({ ...homeForm, name: e.target.value })}
//       />

//       <label htmlFor="category">Category</label>
//       <SearchDropDown_Category handler={type => setHomeForm({ ...homeForm, category: type })} />

//       {
//         homeForm.category && homeForm.category !== "others"
//           ? <>
//             <label htmlFor="category">Sub-category</label>
//             <SearchDropDown_Subcategory
//               handler={val => setHomeForm({ ...homeForm, subcategory: val })}
//               mainCategory={homeForm.category}
//             />
//           </>
//           : null
//       }

//       <label htmlFor="description">Description</label>
//       <textarea
//         name="description"
//         id="description" cols="10" rows="6"
//         onChange={e => setHomeForm({ ...homeForm, description: e.target.value })}
//       >
//       </textarea>

//       <label htmlFor="price">Price</label>
//       <input
//         type="number"
//         id="price"
//         onChange={e => setHomeForm({ ...homeForm, price: parseInt(e.target.value) })}
//       />

//       <label htmlFor="file">Image</label>
//       <input type='file' name='file' onChange={handleFileChange} />
//       {image.preview && <img src={image.preview} width='400' height='400' />}

//       <button type="submit">GO</button>
//     </form>
//   );
// }

export const CreateHomeForm = () => {
  const [homeForm, setHomeForm] = useState({});
  // https://dev.to/przpiw/file-upload-with-react-nodejs-2ho7
  const [image, setImage] = useState({ preview: '', data: '' });

  const handleSubmit = async (e) => {

    e.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    const _bodyToSend = {
      ...homeForm,
      selectedFile: "coucou",
      // selectedFile: formData
    };

    axios.post(path_createHome, _bodyToSend)
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

  return <form method="POST" onSubmit={handleSubmit} >
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              onChange={e => setHomeForm({ ...homeForm, name: e.target.value })}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </form>
}