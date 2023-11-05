function exportData(){
    let fileData = JSON.stringify(state);
    let file = new Blob([fileData],{type: "application/json"});
    let url = URL.createObjectURL(file);
    let link = document.createElement("a");
    link.href=url;
    link.download = "sheet.json";
    link.click();
}