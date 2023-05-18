console.log('client.js sourced');

$( document ).ready(onReady);

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke);
    $('#deleteJokeButton').on('click', clearJoke);
    getJokesToPage();
};
 

function addJoke() {
    let whoseJoke = $('#whoseJokeIn').val();
    let jokeQuestion = $('#questionIn').val();
    let punchLine = $('#punchLineIn').val();


    $.ajax({
    method: 'POST',
    url: '/jokes',
    data: {
        whoseJoke,
        jokeQuestion,
        punchLine
    }
    }).then(function(response) {
        getJokesToPage();
    }
    ).catch(function(error) {
        console.log('POST/ jokes failed', error);
    });
};


function getJokesToPage() {

    $.ajax({
        method: 'GET',
        url: '/jokes',

    }).then(function(response){ 
        console.log('getting jokes', response);
        renderToDom(response)
    }).catch(function(error){
        
        console.log('response failed: ', error);
    });
};

function renderToDom(jokes) {
    $('#outputDiv').empty();

    for (let joke of jokes) {
        $('#outputDiv').append(`
        <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}</li>
        `)
    };
};

function clearJoke() {
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchLineIn').val('');
};
    

   
    
    

