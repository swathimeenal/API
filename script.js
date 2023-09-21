async function foo(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        const datacards = document.getElementById("cards");
        for(var i=0;i<data.length;i++)
        {
          const a = document.createElement("div");
         a.innerHTML = `<div class="card mb-3 h-100 shadow" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title mb-3">Name: ${data[i].name}</h5>
           <p class="card-text">Email: ${data[i].email}</p>
           <p class="card-text">Street: ${data[i].address.street}</p>
           <p class="card-text">City: ${data[i].address.city}</p>
         </div>
       </div>`
       datacards.append(a);
        }     
    }
    catch(error)
    {
        console.log(error)
    }
    
}
foo();
/*`<div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
               <div class="card">
                  <div class="card-body">
                     <p class="card-text"><b>Name:${data[i].name}</b></p>
                     <p class="card-text">Email::${data[i].email}</p>
                     <p class="card-text">street:${data[i].address.street}</p>
                     <p class="card-text">City:${data[i].address.city}</p>
                  </div>
               </div>
            </div>
          </div>`
          document.body.append(div);*/