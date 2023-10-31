var allTodo = []

function submitTodo(){
  // var slack = new Audio("./music/play.mp3")
  
  var day = new Date()
  var time = day.toLocaleTimeString()
  var date = day.toLocaleDateString()
  var title = todoTitle.value
  var details = todoDetails.value

  var todoObj = {
      title : todoTitle.value,
      details : todoDetails.value,
      time,
      date
    } 
    if(title==""&& details==""){
      error.innerHTML=` <p style="color:white;">I am not yet filled</p>`
    }else{
      error.innerHTML=``
      check.innerHTML =""
      todoDetails.value =""
      todoTitle.value = ""
      check.innerHTML =""
      allTodo.push(todoObj);
      allTodo.map((men, ind)=>{
        // slack.play()
      check.innerHTML += `
      <table>
        <th id = "hi"><p  style="color:white;">S/N</p></th>
        <th><p  style="color:white;">Title</p></th>
        <th><p  style="color:white;">Details</p></th>
        <th><p  style="color:white;">Time</p></th>
        <th><p  style="color:white;">Date</p></th>
        <th><p style="color:white;">Terminate</p></th>
       <tr>
        <td><p  style="color:white;">${ind +1}</th></td>
        <td><h3 style="color:white;">${men.title}</h3></td>
        <td><p  style="color:white;">${men.details}</p></td>
        <td> <p style="color:white;">${men.time}</p></td>
        <td> <p style="color:white;">${men.date}</p></td>
        <td> &nbsp <button onclick="deleteTodo(${ind})" style="  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);  cursor: pointer;color: white;     text-transform: uppercase;  border-color: white;     background-color:#1187c7;  height: 50px;
        border-radius: 8px; width:100px;"> Delete</button></td>
       </tr>
       </table>    `
      })
    }

  
    
}
function deleteTodo(ind){
    allTodo.splice(ind,1);
    check.innerHTML =""

    allTodo.map((men, ind)=>{
        check.innerHTML += `
        <table>
          <th id = "hi"><p style="color:white;">S/N</p></th>
          <th><p  style="color:white;">title</p></th>
          <th><p  style="color:white;">details</p></th>
          <th><p  style="color:white;">time</p></th>
          <th><p  style="color:white;">date</p></th>
          <th><p  style="color:white;">terminate</p></th>
         <tr>
          <td><p  style="color:white;">${ind +1}</th></td>
          <td><h3  style="color:white;">${men.title}</h3></td>
          <td><p  style="color:white;">${men.details}</p></td>
          <td> <p  style="color:white;">${men.time}</p></td>
          <td> <p  style="color:white;">${men.date}</p></td>
          <td><button onclick="deleteTodo(${ind})">Delete</button></td>
         </tr>
         </table>    `
       })
}