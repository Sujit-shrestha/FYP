  export const Options   = (logo: string , name: string) => {
  const clickHandler = (name : string) =>{
    console.log(name + ' clicked')
  }
  return (
    <div className="flex  p-3 hover:bg-slate-500 cursor-pointer" key={name} onClick={()=>clickHandler(name)}>
      <img src={logo} alt="Logo" className="w-1/5 mr-3" />
        <span className="w-4/5">{name}</span>
    </div>
    
    
  );
}
