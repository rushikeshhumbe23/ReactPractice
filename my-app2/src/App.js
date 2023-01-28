import './App.css';
import Button from './Components/Button';
import Avatar from './Components/Avatar'


const user=[
  {
        url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/vinit_shahdeo_1c2adad5d2.jpg" ,
        alt:"Vinit Shahdeo" ,
        name:"Vinit Shahdeo",
        rounded:"false"
  },
  {
    url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ramakrishna_a035ba9b1d.jpg" ,
    alt:"Ramakrishna Bolisetty" ,
    name:"Ramakrishna Bolisetty",
    rounded: "true"
  }
]

const UserData = user.map((ele)=>(
  <Avatar url={ele.url} alt={ele.alt} name={ele.name} rounded={ele.rounded} />
));
console.log(UserData);

function App() {

  return (
   <div className="App">
    
   <h1> Hello</h1>
      <Button  text="Button-1" 
      color="red" 
      />
      <Button  text="Button-2" 
      color="green"
      />
    {UserData}
   </div> 
   
  );
}

export default App;
