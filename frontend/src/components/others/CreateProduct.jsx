import { useState } from "react";
import axios from "axios";
import { createProduct_ethers } from "../../blockchain/createProductBC";
import { getAccount } from "../../blockchain/ethers";
import { path_createProduct } from "../../data/routes";

export const CreateProductForm = ({ setHash }) => {
  const [productForm, setProductForm] = useState({});
  // https://dev.to/przpiw/file-upload-with-react-nodejs-2ho7
  const [image, setImage] = useState({ preview: '', data: '' });

  const handleSubmit = async (e) => {

    e.preventDefault();
    const acc = await getAccount(false);
    let formData = new FormData()
    formData.append('file', image.data)
    const _bodyToSend = {
      ...productForm,
      selectedFile: "coucou",
      creator: acc,
      // selectedFile: formData
    };

    axios.post(path_createProduct, _bodyToSend)
    .then(async (res) => {
      // Adding to contract
      const {_id, price} = res.data;
      const createProduct = await createProduct_ethers(_id, price);
      const hash = createProduct.hash;

      setHash(hash);
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
    <form method="POST" onSubmit={handleSubmit} className="flex flex-col">

      <label htmlhtmlFor="title">Title</label>
      <input 
        type="text" 
        id="title" 
        onChange={e => setProductForm({...productForm, title: e.target.value })}
      />

      <label htmlhtmlFor="description">Description</label>
      <textarea 
        name="description" 
        id="description" cols="10" rows="6"
        onChange={e => setProductForm({...productForm, description: e.target.value })}
      >
      </textarea>

      <label htmlhtmlFor="price">Price</label>
      <input 
        type="number" 
        id="price" 
        onChange={e => setProductForm({...productForm, price: parseInt(e.target.value) })}
      />

      <label htmlhtmlFor="file">Image</label>
      <input type='file' name='file' onChange={handleFileChange} />
      {image.preview && <img src={image.preview} width='400' height='400' />}
    
      <button type="submit">GO</button>
    </form>
  );
}