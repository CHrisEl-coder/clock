const hour = document.querySelector('.clock div .hours')
const minute = document.querySelector('.clock div .minutes')
const second = document.querySelector('.clock div .seconds')
const ampm = document.querySelector('.clock div .ampm')

function clock (){
    hr = new Date().getHours()
    min = new Date().getMinutes()
    sec= new Date().getSeconds()

    ampm.textContent = 'am'
        if (hr > 12) {
            hr = hr - 12
            ampm.textContent = 'pm'
            
        }
        

        hr = hr < 10 ? '0' + hr: hr;
        min = min < 10 ? '0' + min: min;
        sec = sec < 10 ? '0' + sec: sec;

        hour.textContent = hr
        minute.textContent = min
        second.textContent = sec

    setTimeout(() => {
        clock()
    }, 1000);

}

clock ();