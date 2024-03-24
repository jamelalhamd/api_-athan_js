var city = 'Dubai';
var country = 'United Arab Emirates';




//let url1 = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Germany`;




function gettime(url) {
    axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data.data);
 
        var f=response.data.data.timings.Fajr;
        var shu=response.data.data.timings.Sunrise;
        var duh=response.data.data.timings.Dhuhr;
        var asr=response.data.data.timings.Asr;
        var mg=response.data.data.timings.Sunset;
        var ash=response.data.data.timings.Isha;
       
    
       
        gethtml("Fajr",f);
        gethtml("Sunrise",shu);
        gethtml("Dhuhr",duh);
        gethtml("Asr",asr);
        gethtml("Maghrib",mg);
        gethtml("Isha",ash);
        
       
        var date_melad=response.data.data.date.readable;
        var date_hajri=response.data.data.date.hijri.date;
         gethtml("date_m",date_melad);
        gethtml("date_h",date_hajri);
         console.log(date_melad);
         console.log(date_hajri);
       

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
   





}

gettime(the_url("Bad Driburg"));

function gethtml(id,value){

document.getElementById(id).innerHTML=value;
console.log(value);





}

document.getElementById("selector").addEventListener("change",function(e){


 gettime(the_url(this.value));

});

function the_url(city){

    var url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Germany`;
    gethtml("city",city);
    console.log(url);
return url;




}

  