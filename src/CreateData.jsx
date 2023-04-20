import React ,{useState} from 'react';

function createData() {
      const [name,setName] =useState("")
      const [brand,setBrand] =useState("")
      const [qty,setQty] =useState("")
      const [price,setPrice] =useState("")
      const [image,setImage] =useState("")
      const [message,setMessage] =useState("")
         const findData=(e)=>{
             e.preventDefault()
             alert("ok")
         }
  return (
    <>
    <div className='from'>
      <form onClick={findData}> 
        <h6>ProductName:</h6>
        <input type="text" placeholder='Enter your product name:'value={name} onChange={e=>setName(e.target.value)} className='form-control'/>
        <h6>ProductBrand:</h6>
        <input type="text" placeholder='Enter your brand name:'value={brand} onClick={e=>setBrand(e.target.value)} className='form-control'/>
        <h6>Quantity :</h6>
        <input type="text" placeholder='Enter your  Quantity name:' value={qty} onClick={e=>setQty(e.target.value)} className='form-control'/>
        <h6>Product Price:</h6>
        <input type="number" placeholder='Enter your product price:' value={ price} onClick={e=>setPrice(e.target.value)} className='form-control'/>
        <h6> product Image:</h6>
        <input type="text" placeholder='Enter your product url:' value={image} onClick={e=>setImage(e.target.value)} className='form-control'/>
        <h6>Message:</h6>
        <textarea type="text" placeholder='Enter your product update massage:' value={message}  onClick={e=>setMessage(e.target.value)} className='form-control'></textarea>&nbsp;
        <button className='btn btn-primary  form-control' type="submit">SUBMIT</button>
        </form>
    </div>
    </>
  )
}

export default createData;