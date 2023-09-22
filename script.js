const res = fetch("https://jsonplaceholder.typicode.com/users")
res.then((data) => data.json()).then((data1)=>{
    for(var i=0; i<data1.length ; i++)
    {
         console.log(data1[i]);
         const div = document.createElement("div")
         div.innerHTML=`<div class="row row-cols-1 row-cols-md-2 g-4">
         <div class="col">
           <div class="card">
             <div class="card-body">
               <p class="card-text">Name: ${data1[i].name}</p>
               <p class="card-text">Email: ${data1[i].email}</p>
               <p class="card-text">Street: ${data1[i].address.street}</p>
               <p class="card-text">City: ${data1[i].address.city}</p>
             </div>
           </div>
         </div>`
         document.body.append(div);
    
}
})