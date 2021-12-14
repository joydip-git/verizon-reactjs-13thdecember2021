document.getElementById('btnLoad').addEventListener('click', function () {
    // employees-> bind this to the table
})
document.getElementById('txtSearch').addEventListener('change', function () {
    const serachedEmploees = employees.filter(emp => emp.name.indexOf('a') !== -1)
   // bind serachedEmploees to the table
})

