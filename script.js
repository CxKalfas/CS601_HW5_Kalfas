// console.log("Aliens are real? Maybe?")



document.addEventListener("DOMContentLoaded", function(event) {
  
  fetch('degrees.json')
    .then(response => response.json())
    .then(data => { 
      console.log('My data', data);

      const table = document.createElement('table');
      let tr = document.createElement('tr');
      let th1 = document.createElement('th');
      let th2 = document.createElement('th');
      let th3 = document.createElement('th');
      let th4 = document.createElement('th');
    
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
    
      let content = document.createTextNode('School');
      th1.appendChild(content);
      
      content = document.createTextNode('Major');
      th2.appendChild(content);
    
      content = document.createTextNode('Year');
      th3.appendChild(content);
    
      content = document.createTextNode('Type');
      th4.appendChild(content);
    
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);

      table.appendChild(tr);
      
      data.degrees.forEach((element, index) => {
        console.log('Row data ', element);  
        
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');
        td4 = document.createElement('td');
        
        content = document.createTextNode(element.school);
        td1.appendChild(content);
        
        content = document.createTextNode(element.major);
        td2.appendChild(content);
        
        content = document.createTextNode(element.year);
        td3.appendChild(content);
        
        content = document.createTextNode(element.type);
        td4.appendChild(content);
        
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        
        table.appendChild(tr);
        
      });
    
      document.getElementById("card").appendChild(table);
    });
    
  });