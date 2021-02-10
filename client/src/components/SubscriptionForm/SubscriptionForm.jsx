import React, { useState} from 'react';

const SubscriptionForm = ({handleFormSubmit}) => {

    const [featured, setFeatured]= useState("");
        const [featuredPrice, setFeaturedPrice]= useState("");
        const [subscription,setSubscription] =useState("");
        const [price,setPrice] =useState("");
        const [plan,setPlan] =useState("");
    return (
        <>
        <form className="col s12" onSubmit= {(e)=>  {handleFormSubmit (e, {featured,featuredPrice,subscription,price, plan,
        });
        } } >
        <div className="row">
       
       <div className="input-field col s6">
       {/* <input id="featured"/> */}
       <label htmlFor= "featured Subscriptions"></label>
 <select className="browser-default" id="featured" type="" name="featured" value={featured} onChange={(e) =>{
                 setFeatured(e.target.value);
         }}>
   <option value="" disabled selected>Featured Subscriptions</option>
   <option value="ADD NEW SUBSCRIPTIONS">ADD NEW SUBSCRIPTIONS</option>
   <option value="Hulu">Hulu</option>
   <option value="Spotify">Spotify</option>
   <option value="Netflix">Netflix</option>
   <option value="Amazon">Amazon</option>
   <option value="Apple Music">Apple Music</option>
   
 </select>
   <label></label>
 
       </div>

       <div className="row">
      
       <div className="input-field col s6">
       {/* <input id="featured"/> */}
       <label htmlFor= "featured subscription price"></label>
 <select className="browser-default" id="featured price" type="" name="featured price" value={featuredPrice} onChange={(e) =>{
                 setFeaturedPrice(e.target.value);
         }}>
   <option value="" disabled selected>Price</option>
   <option value="ADD A CUSTOM PRICE">ADD A CUSTOM PRICE</option>
   <option value="$5.99">$5.99</option>
   <option value="$8.99">$8.99</option>
   <option value="$12.99">$12.99</option>
   <option value="$17.99">$17.99</option>
   <option value="2$5.99">$25.99</option>

 </select>
   <label></label>
 </div>
       </div>
       </div>
     {/* </div> */}
     <div className="row">
       {/* conditional rendering for the forms */}
       { featured === "ADD NEW SUBSCRIPTIONS" && (
          <div className="input-field col s6">

          {/* Value comes in from state, a change in the value sets the title on state and triggers a re-render */}
    <input placeholder="" id="subscription" type="text" name="subscription" value={subscription} onChange={(e) =>{
            setSubscription(e.target.value);
    }}/>
    <label htmlFor="subscription">Add New Subscription</label>
  </div>
       )}
       {/* conditional rendering for the forms */}
{ featuredPrice === "ADD A CUSTOM PRICE" && (
<div className="input-field col s6">
       <input placeholder="" id="price" type="text" name="price" value={price} onChange={(e) =>{
                 setPrice(e.target.value);
         }}/>
         <label htmlFor="subscription price">Subscription Price</label>
       </div>
  
)}

     </div>
     <div className="row">
       <div className="input-field col s6">
       <input placeholder="" id="plan" type="text" name="plan" value={plan} onChange={(e) =>{
                 setPlan(e.target.value);
         }}/>
         <label htmlFor="subscription Plan">Subscription Plan</label>
       </div>
     </div>
     <div className="row">
        <div className="col s12">
        <button className="btn waves-effect waves-light">Add to dashboard
   </button>
        </div>
       </div>
    </form>
    </>
    )
};

export default SubscriptionForm;