document.addEventListener('DOMContentLoaded', (event) => {
    const arabicMonths = [
        { name: "يناير", number: "(1)" },
        { name: "فبراير", number: "(2)" },
        { name: "مارس", number: "(3)" },
        { name: "أبريل", number: "(4)" },
        { name: "مايو", number: "(5)" },
        { name: "يونيو", number: "(6)" },
        { name: "يوليو", number: "(7)" },
        { name: "أغسطس", number: "(8)" },
        { name: "سبتمبر", number: "(9)" },
        { name: "أكتوبر", number: "(10)" },
        { name: "نوفمبر", number: "(11)" },
        { name: "ديسمبر", number: "(12)" }
    ];

    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    // Populate day options
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populate month options
    arabicMonths.forEach((month, index) => {
        let option = document.createElement('option');
        option.value = index + 1;
        option.textContent = `${month.name} ${month.number}`;
        monthSelect.appendChild(option);
    });

    // Populate year options (starting from 2024)
    for (let i = 2024; i <= 2100; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
});

function calculateDate() {
    const arabicMonths = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    let day = document.getElementById('day').value;
    let monthIndex = document.getElementById('month').value - 1; // Subtract 1 to get the correct index
    let year = document.getElementById('year').value;
    let daysToAdd = document.getElementById('days').value;

    if (day && monthIndex !== undefined && year && daysToAdd !== '') {
        daysToAdd = parseInt(daysToAdd);
        let currentDate = new Date(year, monthIndex, day);
        currentDate.setDate(currentDate.getDate() + daysToAdd - 1); // Subtract 1 day

        let newDay = currentDate.getDate();
        let newMonth = currentDate.getMonth();
        let newYear = currentDate.getFullYear();

        let result = `${newDay}-${newMonth + 1}-${newYear}`;
        document.getElementById('result').textContent = 'تاريخ انتهاء الاجازة: ' + result;
    } else {
        document.getElementById('result').textContent = 'الرجاء إدخال جميع الحقول';
    }
}