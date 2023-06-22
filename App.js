/*
<div>
  <div>
    <h1>This is h1 </h1>
    <h1>This is h2 </h1>
   </div>
</div>
*/

const heading = React.createElement("div" ,{id:"hding",xyz:"abc"} , 
React.createElement("div" ,{} ,
 [React.createElement("h1" ,{} ,"This is h1" ),React.createElement("h1" ,{} ,"This is h2" )]
));




//const heading = React.createElement("h1" ,{id:"hding",xyz:"abc"} , "Hello world react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);

console.log(root);