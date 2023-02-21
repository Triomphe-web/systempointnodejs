document.getElementById('save').addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById('section_with_button').classList.add('hide')
    document.getElementById('section_to_show_after_click').classList.remove('hide')
    document.getElementById('section_to_show_after_click').classList.add('show')

    // fetch js request to insert to database
    let name = document.getElementById('small_name').innerText
    let date = document.getElementById('date_form').value
    let time_start = document.getElementById('time_start_form').value
    let time_end = document.getElementById('time_end_form').value

    fetch('/api/get_user_info',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: name, date: date, time_start: time_start, time_end: time_end}),
    })
    .then((response) => response.json())
    .then((data) =>{
        let hours_start = time_start.split(':')[0]
        let hours_end = time_end.split(':')[0]
        let work_hours = hours_end - hours_start
        let min_start = time_start.split(':')[1]
        let min_end = time_end.split(':')[1]
        let work_min = min_end - min_start
        const work_time = work_hours+ ':'+ work_min
        document.getElementById('work_time').innerText = work_time
        document.getElementById('date_res').innerText = data.date
        document.getElementById('time_st_res').innerText = data.time_start
        document.getElementById('time_end_res').innerText = data.time_end
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

document.getElementById('save_break').addEventListener('click',(e)=>{
    e.preventDefault()
    let time_pause_start = document.getElementById('break_form_start').value
    let time_pause_end =document.getElementById('break_form_end').value
    document.getElementById('break_start').innerText = time_pause_start
    document.getElementById('break_end').innerText = time_pause_end
    const HOURS_START_PAUSE = time_pause_start.split(':')[0]
    const HOURS_START_END = time_pause_end.split(':')[0]
    const HOURS_WORK_TIME = document.getElementById('work_time').innerText.split(':')[0]
    const MIN_START_PAUSE = time_pause_start.split(':')[1]
    const MIN_START_END = time_pause_end.split(':')[1]
    const MIN_WORK_TIME = document.getElementById('work_time').innerText.split(':')[1]
    let PAUSE_HOURS = HOURS_START_END - HOURS_START_PAUSE
    let PAUSE_MIN = MIN_START_END - MIN_START_PAUSE
    let REAL_WORK_TIME = HOURS_WORK_TIME - PAUSE_HOURS
    let MIN_REAL_WORK_TIME = MIN_WORK_TIME - PAUSE_MIN

    // TOTAL REEL

    const TOTAL = REAL_WORK_TIME+' H '+MIN_REAL_WORK_TIME+' min'
    document.getElementById('work_time').innerText = TOTAL

    // go to top of page
    window.scrollTo(0, 0);
})

