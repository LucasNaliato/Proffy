document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    
    let scheduleItem = document.querySelector(".schedule-item").cloneNode(true)

    let fieldsetSchedule = document.querySelector("#schedule-items")

    let fields = scheduleItem.querySelectorAll('input')

    fields.forEach(field => {
        field.value = ""
    })

    fieldsetSchedule.appendChild(scheduleItem);

}