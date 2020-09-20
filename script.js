const newYear = '1 jan 2021';

function formatTime ( time ) {
    return time < 10 ? `0${ time }` : time;
}

function countdown () {
    const newYearDate = new Date( newYear );
    const currentDate = new Date();

    const totalSeconds = Math.floor( ( newYearDate - currentDate ) / 1000 );

    const days = parseInt( ( totalSeconds / 3600 ) / 24 );
    const hours = parseInt( ( totalSeconds / 3600 ) % 24 );
    const minutes = parseInt( ( totalSeconds / 60 ) % 60 );
    const seconds = totalSeconds % 60;

    document.getElementById( 'days' ).textContent = days;
    document.getElementById( 'hours' ).textContent = formatTime( hours );
    document.getElementById( 'minutes' ).textContent = formatTime( minutes );
    document.getElementById( 'seconds' ).textContent = formatTime( seconds );
}

setInterval( countdown, 1000 );
