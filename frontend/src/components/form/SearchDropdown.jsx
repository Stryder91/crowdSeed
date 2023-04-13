import { categories } from "../../data/category";

export const SearchDropDown_Category = ({ handler }) => {

  return(
    <select name="categories" id="categories" onChange={e => handler(e.target.value)}>
      {Object.keys(categories).map((cat, i) => <option key={i} value={cat}>{categories[cat].name}</option>)}
      <option value="others">Others</option>  
    </select>
  );
}

export const SearchDropDown_Subcategory = ({ handler, mainCategory }) => {
  if (mainCategory && categories[mainCategory]){
    return(
      <select name="subCategories" id="subCategories" onChange={e => handler(e.target.value)}>
        { categories[mainCategory].sub.map((cat, i) => <option key={i} value={cat.name}>{cat.name}</option>) }
        <option value="others">Others</option>
      </select>
    );
  }
  return <></>
}