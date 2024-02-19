  export const DashboardOptions   = (logo: string , name: string) => {
  const clickHandler = (name : string) =>{
    console.log(name + ' clicked')
  }
  return (
    <div className="flex  p-3 hover:text-orange-500  active:bg-slate-300  transition cursor-pointer select-none" key={name} onClick={()=>clickHandler(name)}>
<img src={logo} alt="Logo" className="w-1/5 mr-3 hover:animate-pulse logo-img" style={{fill:"red"}} />
      
        <span className="w-4/5">{name}</span>
    </div>
    
    
  );
}
