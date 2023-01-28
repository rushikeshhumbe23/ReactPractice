function Button({text , color }){

 const evenHandler=()=>{
    alert(`${text} is clicked`)
  }
    return (
      <button onClick={evenHandler} style={{color:color }}>{text}</button>
    );
  }

 export default Button;