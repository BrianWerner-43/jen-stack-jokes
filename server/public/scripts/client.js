console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke);
}
 
let addJoke;
function joke(event) {
event.preventDefault();
addJoke = 'Add Joke'
console.log('add joke', addJoke)
}
getJokesToPage();

function getJokesToPage() {

    $.ajax({
        method: 'GET',
        url: '/jokes',

    }).then(function(response){ 
    }).catch(function(error){
        alert('request faild! :(');
        console.log('response failed: ', error);
    });

    $('#outputDive').empty();
    
}


 let jokeHistory = {
    whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
        

};
  console.log(jokeHistory);



$.ajax({
    method: 'POST',
    url: '/jokeHistory',
    data: jokeHistory
}).then(function(response) {
    
}
).catch(function(error) {
    console.log('POST/ jokeHistory failed');
})
    

   
    
    

