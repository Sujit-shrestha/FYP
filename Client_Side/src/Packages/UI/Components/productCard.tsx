import pic from './../../../assets/demopics/pic3.jpg'; 

export const ProductCard = ()=>{

  return(
<div className="w-72 rounded overflow-hidden shadow-lg ">
  <img className="w-full" src={pic} alt="Card image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
   </div>

</div>

  );
}