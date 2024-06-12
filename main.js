
//  main.js 
   
//  GET request using fetch() 
// fetch("https://developerkwame.com/v1/user") 
    
//     // Converting received data to JSON 
//     .then(response => response.json()) 
//     .then(json => { 
   
//         // Create a variable to store HTML 
//         let li = `<tr><th>Name</th><th>Email</th></tr>`; 
        
//         // Loop through each data and add a table row 
//         json.forEach(user => { 
//             li += `<tr> 
//                 <td>${user.name} </td> 
//                 <td>${user.email}</td>          
//             </tr>`; 
//         }); 
   
//     // Display result 
//     document.getElementById("users").innerHTML = li; 
// }); 



const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0dWR5LmRldmVsb3Blcmt3YW1lLmNvbS8iLCJhdWQiOiJTdHVkeSBXaXRoIE1hdGVzIiwiaWF0IjoxNzE3NzYzNzUwLCJuYmYiOjE3MTc3NjM3NTAsInRpbWUiOjE3MTc3NjM3NTAsImV4cCI6MTcxNzc2NzM1MCwidXNlciI6eyJ3b3Jrc3BhY2VfaWQiOiJXMDAwMDAyIiwidXNlcl9pZCI6IjAxSFo2MEozMkU1SlREWlc5WEhHTjU1TVBUIiwiZmlyc3RfbmFtZSI6Ikt3YW1lIiwibGFzdF9uYW1lIjoiT3RlbmciLCJlbWFpbCI6ImRldmVsb3Blcmt3YW1lQGdtYWlsLmNvbSIsIm1zaXNkbiI6IjIzMzI0MzcyMTAwMCIsInJvbGUiOiJ1c2VyIn19.XSfAyNDESB93RBgz_aWb1o6qM8BaBtHeAM0Gv8Vxxu4';
const apiUrl = 'https://study.developerkwame.com/v1/user';

fetch(apiUrl, {
  method: 'GET',
  mode: "cors",
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json' 
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
})
.then(data => {
  // console.log(data);
  document.querySelector('body').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
})
.catch(error => {
  console.error('Fetch Error:', error); 
});


// function cors() {
    
//     // Allow from any origin
//     if (isset($_SERVER['HTTP_ORIGIN'])) {
//         // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
//         // you want to allow, and if so:
//         header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
//         header('Access-Control-Allow-Credentials: true');
//         header('Access-Control-Max-Age: 86400');    // cache for 1 day
//     }
    
//     // Access-Control headers are received during OPTIONS requests
//     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//             // may also be using PUT, PATCH, HEAD etc
//             header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//             header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
//         exit(0);
//     }
    
//     echo "You have CORS!";
// }

// header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
// header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
