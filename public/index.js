function viewActivePatientsChart(){
    fetch('/corona')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Filter data to last month
        const lastMonthData = data.filter(c => {
            const positiveResultDate = new Date(c.positiveResultDate);
            const recoveryDate = new Date(c.recoveryDate);
            const lastMonthDate = new Date();
            lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
            return (
                // assuming that the positiveResultData isn't automatically computed
                positiveResultDate >= lastMonthDate || recoveryDate >= lastMonthDate
                );
        });
        console.log(lastMonthData);

        // Create labels and data for the chart
        const labels = [];
        const activePatientsData = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date();
            date.setDate(date.getDate() - (30 - i));
            const dateString = date.toISOString().substring(0, 10);
            labels.push(dateString);
            activePatientsData.push(lastMonthData.filter(c => c.positiveResultDate <= dateString && c.recoveryDate >= dateString).length);
        }
        
        new Chart('active-patients-chart', {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Active Patients',
                    data: activePatientsData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error(error));
}