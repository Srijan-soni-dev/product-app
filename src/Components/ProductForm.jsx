import React, { useState } from "react";

 export default function ProductForm({ onSubmit }) {
  const [form, setForm] = useState({ name:"", price:"", category:"", stock:"", description:"" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.price || isNaN(form.price)) errs.price = "Price must be a number";
    if (!form.category) errs.category = "Category is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit(form);
    setForm({ name:"", price:"", category:"", stock:"", description:"" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
      {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
      <input placeholder="Price" value={form.price} onChange={e=>setForm({...form, price:e.target.value})}/>
      {errors.price && <p style={{color:"red"}}>{errors.price}</p>}
      <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
      {errors.category && <p style={{color:"red"}}>{errors.category}</p>}
      <input placeholder="Stock" value={form.stock} onChange={e=>setForm({...form, stock:e.target.value})}/>
      <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})}/>
      <button type="submit">Save</button>
    </form>
  );
}

 