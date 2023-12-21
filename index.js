const urlInputEl = document.getElementById("url-input-el")
const saveInputBtn = document.getElementById("save-input-btn")
const urlListEl = document.getElementById("url-list-el")

let urlList = ["google.com", "netflix.com"]

saveInputBtn.addEventListener("click", function () {
    urlList.push(urlInputEl.value)
    urlListEl.innerHTML = "" // Clear the list element from previous entries

    // Show URL list
    let listItems = ""
    for (let i = 0; i < urlList.length; i++) {
        listItems += "<li>" + urlList[i] + "</li>"
    }
    urlListEl.innerHTML = listItems
})

