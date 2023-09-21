async function foo(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
          const div = document.createElement("div");
         div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4">
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
          document.body.append(div);
        }     
    }
    catch(error)
    {
        console.log(error)
    }
    
}
foo();