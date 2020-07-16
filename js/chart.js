// Traffic line graph

const trafficCanvas = document.getElementById("traffic-chart");
let trafficNavList = document.getElementsByClassName("traffic-nav")[0];


let hourLabels = ["2-4", "4-6","6-8","8-10","10-12","10-12","12-14","14-16","16-18","18-20","20-22","22-24"];
let hourData = [ 750 , 1250 , 1000 , 2000 , 1500 , 1750 , 1250 , 1850 , 2250 , 1500 , 2500, 2000];

let dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let dayData = [650, 2300, 1000, 2000, 1250, 2750, 2000];

let weekLabels = ["Week-1","Week-2","Week-3","Week-4","Week-5","Week-6","Week-7","Week-8","Week-9","Week-10","Week-11","Week-12",];
let weekData = [ 850 , 1350 , 900 , 1900 , 1400 , 1850 , 1350 , 1650 , 2750 , 1000 , 2200, 2200];

let monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthData = [ 650 , 1550 , 700 , 2100 , 1200 , 2050 , 1550 , 1850 , 2950 , 2000 , 2600, 2100];


let trafficData = {
    labels: hourLabels,
    datasets: [{
    data: hourData,
    backgroundColor: 'rgba(116, 119, 191, .4)' ,
    borderWidth: 1 ,
}]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {duration: 3000},
    scales: {yAxes: [{ticks: {beginAtZero: true}}]},
    legend: {display: false},
    responsive: true,
    maintainAspectRatio: false,
    
};

let trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,

});

function classRemove(){
const nav = document.querySelector(".traffic-nav")
for (let i = 0; i < nav.length; i++)
nav[i].classList.remove("selected")
}

trafficNavList.addEventListener("click", (event) => {

    trafficNavList = event.target
       classRemove();
       if(trafficNavList.innerHTML == "Hourly"){
        trafficData.labels = hourLabels
        trafficData.datasets[0].data = hourData
        trafficChart.update();
        trafficNavList.classList.toggle("selected")
    } else if (trafficNavList.innerHTML == "Daily"){
        trafficData.labels = dayLabels
        trafficData.datasets[0].data = dayData
        trafficChart.update();
        trafficNavList.classList.toggle("selected")
    } else if (trafficNavList.innerHTML == "Weekly"){
        trafficData.labels = weekLabels
        trafficData.datasets[0].data = weekData
        trafficChart.update();
        trafficNavList.classList.toggle("selected")
    } else if (trafficNavList.innerHTML == "Monthly"){
        trafficData.labels = monthLabels
        trafficData.datasets[0].data = monthData
        trafficChart.update();
        trafficNavList.classList.toggle("selected")
    }
})







//end of traffic line graph

//daily traffic BAR chart

const dailyCanvas = document.getElementById("daily-traffic-chart");
const dailyData = {
    labels: [ "S" , "M" , "T" , "W" , "T" , "F" , "S" ],
    datasets: [{
    label: '# of Hits' ,
    data: [ 75 , 115 , 175 , 125 , 225 , 200 , 100 ],
    backgroundColor: '#7477BF' ,
    borderWidth: 1
    }]
    };
const dailyOptions = {
    scales: {
      yAxes: [{
        ticks: {
        beginAtZero: true
        }
      }]
    },
    legend : {
      display: false
},
responsive: true,
maintainAspectRatio: false,
};

let dailyTrafficChart = new Chart(dailyCanvas, {
    type: "bar",
    data: dailyData,
    options: dailyOptions,

});



//end of traffic BAR chart

//Mobile user chart

const mobileCanvas = document.getElementById("mobile-users-chart");

const mobileData = {
    labels: [ "Desktop" , "Tablet" , "Phones" ],
    datasets: [{
        label: '# of Users' ,
    data: [ 2000 , 550 , 500 ],
    borderWidth: 0 ,
    backgroundColor: [
    '#7477BF' ,
    '#78CF82' ,
    '#51B6C8'
    ]
    }]
    };
const mobileOptions = {
    legend: {
        position: 'right' ,
    labels: {
        boxWidth: 20 ,
        fontStyle: 'bold'
    }
    },
    responsive: true,
    maintainAspectRatio: false,   
    }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut' ,
    data: mobileData,
    options: mobileOptions
        });

//end of mobile user chart
