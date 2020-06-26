$(document).ready(function () {
    var hours = $(".hour");
    var timeBlock = $(".col-10");
    writing = JSON.parse(localStorage.getItem("writing"));
    for(var i=0; i<hours.length; i++){
        console.log(writing[hours[i].innerHTML.split(" ")])
        if (writing[hours[i].innerHTML.split(" ")] === "undefined"){
            timeBlock[i].value = "";
        }
        else{
            timeBlock[i].value = writing[hours[i].innerHTML.split(" ")];
        }

    }
    for (var i=0; i<hours.length; i++){
        if(i<12){
            if (moment().hour() === parseInt(hours[i].innerHTML.split(" ")[0], 10)){
                $(timeBlock[i]).addClass("present");
            } 
            else if(moment().hour() > parseInt(hours[i].innerHTML.split(" ")[0], 10)){
                $(timeBlock[i]).addClass("past");
            }
            else{
                $(timeBlock[i]).addClass("future");
            }
        }
        else{
            if (moment().hour() === parseInt(hours[i].innerHTML.split(" ")[0], 10)+12){
                $(timeBlock[i]).addClass("present");
            }
            else if(moment().hour() > parseInt(hours[i].innerHTML.split(" ")[0], 10)+12){
                $(timeBlock[i]).addClass("past");
            }
            else{
                $(timeBlock[i]).addClass("future");
            }
        }
    }

    $(".saveBtn").on("click", function(){
        writing = {};
        for (var i=0; i<hours.length; i++){
            writing[hours[i].innerHTML.split(" ")] = timeBlock[i].value;
            localStorage.setItem("writing", JSON.stringify(writing))
        }
    })

});