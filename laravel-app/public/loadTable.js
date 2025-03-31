//TODO: Create function to load the data into the table from the source its coming from(database?)
function loadTableData(data, page){
    const body = document.getElementById(page).querySelector('tbody');
    body.innerHTML= '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.documentName}</td>
            <td>${item.date}</td>
            <td>${item.download}</td>
        `;
        body.appendChild(row)
    });
}
// Function to load table
export function loadTable(page) {
    let data = [];
    if(page === 'documents'){
        //pull data from documents
    }
    else if (page === 'labResults'){
        //pull data from lab result documents
    }
    loadTableData(data, '${page}Table');
}
;