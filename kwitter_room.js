
var firebaseConfig = {
      apiKey: "AIzaSyDcK4CQ5e6i-AI9E3VWl9bVii8wsV2YLI8",
      authDomain: "tic-tac-75ccf.firebaseapp.com",
      databaseURL: "https://tic-tac-75ccf-default-rtdb.firebaseio.com",
      projectId: "tic-tac-75ccf",
      storageBucket: "tic-tac-75ccf.appspot.com",
      messagingSenderId: "234848442387",
      appId: "1:234848442387:web:d35db9bdd31589d9fc87e6"
    };
    firebase.initializeApp(firebaseConfig)
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")
    document.getElementById("user_name").innerHTML="welcome "+ user_name+"!"
    function addRoom()
    {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name)
        window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+ Room_names)
      row="<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names+ "</div>"
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
        window.location = "kwitter_page.html"
} 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html"
}

