const alertBanner = document.getElementById("alert");   

// Alert Banner for main page that displays overdue tasks

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



//messaging section

const user = document .getElementById( "userField" );
const message = document .getElementById( "messageField" );
const send = document .getElementById( "send" );

send.addEventListener( 'click' , () => {
    // ensure user and message fields are filled out
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
  


//JS to create menu for alert icon
const badge = document.querySelector(".badge");
const bellContainer = document.querySelector(".bell-container");
let alertItemsMenu = ["There has been an increase in Traffic to the website", "Mobile stats have declined", "A new member message has been recieved"];
let newList = document.createElement("ul");
const bellIcon = document.querySelector(".bell-icon .bell-detail")

badge.innerHTML = alertItemsMenu.length
if (alertItemsMenu.length > 0){
bellIcon.style.fill = "green";
bellIcon.style.transition = "ease-in 1s";

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
            listItems.innerHTML = alertItemsMenu[i];
            newList.appendChild(listItems); 
            listItems.appendChild(closeButton);                
        }
        function empty (){
            alertItemsMenu = [];
        }
        empty()
    }
});

const closeAlert = document.querySelector(".close");

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

  //This is the JS to support filter on search box

let members = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
let search = document.getElementById("search-list");


for (let i = 0; i < members.length; i++){
    let option = document.createElement("option");
    option.value = members[i];
    search.appendChild(option)
}








