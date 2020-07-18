//JS to create menu for alert icon notifications

const badge = document.querySelector(".badge");
const bellContainer = document.querySelector(".bell-container");
let alertItemsMenu = ["There has been an increase in Traffic to the website", "Mobile stats have declined", "A new member message has been recieved"];
let newList = document.createElement("ul");
const bellIcon = document.querySelector(".bell-icon .bell-detail");
const closeAlert = document.querySelector(".close");

badge.innerHTML = alertItemsMenu.length;

if (alertItemsMenu.length > 0){
    bellIcon.style.fill = "#78CF82";
    bellIcon.style.transition = "ease-in 2s";
}

bellContainer.addEventListener("click", (event) => {
    if (event.target.classList == "badge" || "bellContainer")
    badge.style.display = "none";
    if (alertItemsMenu.length > 0 ){   
        newList.classList.add("alert-list");
        for (let i = 0; i < alertItemsMenu.length; i++){
            bellContainer.appendChild(newList);
            let listItems = document.createElement("li");
            let closeButton = document.createElement("button");
            closeButton.classList.add("close");
            closeButton.innerHTML = "Close"
            listItems.innerHTML = alertItemsMenu[i]; //This inputs the notifications stored in the alert mennu array as HTML
            newList.appendChild(listItems); // creates new list unordered list with new list items
            listItems.appendChild(closeButton);                
        }
        function empty (){
            alertItemsMenu = [];
        }
        empty()
    }
});

//This scope hides the list item once the client clicks on the close button

bellContainer.addEventListener("click", (event) => {
    if (event.target.classList == "close"){
        let li = document.querySelector("li")[0]; 
        const close = event.target;
        li = close.parentNode;
        li.style.display = "none";
        if (li.length == null){  
        bellIcon.style.fill = "white"
        }
    }

})

//End of setting up the bell notificaion and list itemss.



// Alert Banner for main page that displays overdue tasks
const alertBanner = document.getElementById("alert");   
const alertBannerHTML = document.createElement("p");
const closeBanner = document.createElement("p");

alertBannerHTML.innerHTML = ("<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete");
alertBannerHTML.classList.add("alert-banner");
closeBanner.innerHTML = ("x");
closeBanner.classList.add("close-banner");
alertBanner.appendChild(alertBannerHTML);
alertBanner.appendChild(closeBanner);

alertBanner.addEventListener("click", (event) => {
    const closeAlert = event.target;
    if (closeAlert.classList == "close-banner"){
        alertBanner.style.display = "none";
    }
})

//end of alert banner script



//messaging section to ensure that the form is completed successfully

const user = document .getElementById( "userField" );
const message = document .getElementById( "messageField" );
const send = document .getElementById( "send" );

send.addEventListener( 'click' , () => {
    if (user.value === "" && message.value === "" ) {
    alert( "Please fill out user and message fields before sending" );
    } else if (user.value === "" ) {
    alert( "Please fill out user field before sending" );
    } else if (message.value === "" ) {
    alert( "Please fill out message field before sending" );
    } else {
    alert( `Message successfully sent to: ${user.value}` );
    }
    });

  //This is the JS to support filter on search box

  let members = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
  let search = document.getElementById("search-list");  
  
  for (let i = 0; i < members.length; i++){
      let option = document.createElement("option");
      option.value = members[i];
      search.appendChild(option)
  }    








//This is JS to store setting items in the local storage

let emailNotifications = document.getElementById("email-notifications");
let profileSettings = document.getElementById("profile-settings");
let timezone = document.getElementById("timezone");
let saveBtn = document.getElementById("save");
let cancelBtn = document.getElementById("cancel");
let emailPref = localStorage.getItem('emailPref');
let profilePref = localStorage.getItem('profilePref');
let timeZonePref = localStorage.getItem('timezonePref');

function testStorage() {
    const test = 'test';
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch(e) {
        return false;
    }
   }

const loadSettings = function() {
    if (emailPref !== null) {
    emailNotifications.checked =  (emailPref === "true")
    }
    if (profilePref !== null) {
    profileSettings.checked = (profilePref === "true")
    }
    timezone.value = localStorage.getItem("timeZonePref");
}


if(testStorage() === true){ 
    document.getElementById("save").addEventListener("click", function(){
        localStorage.setItem('emailPref', emailNotifications.checked);
        localStorage.setItem('profilePref', profileSettings.checked);
        localStorage.setItem('timeZonePref', timezone.value);        
        alert('Settings successfully saved!');

    });
    console.log(timeZonePref)
    document.getElementById("cancel").addEventListener("click", function() {
        const cancel = confirm('Are you sure you want to cancel changes?');
        if (cancel) {
            localStorage.setItem('emailPref', emailNotifications.checked = null)
            localStorage.setItem('profilePref', profileSettings.checked = null)
            localStorage.setItem('timeZonePref', timezone.value = "Select a Timezone")

        }
      });
      loadSettings();
    }

    