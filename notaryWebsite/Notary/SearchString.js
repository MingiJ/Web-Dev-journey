//Load  a book from disk
function loadBook(filename,displayName){
    let currentBook = "";
    let url = "books/" + filename;

    //reset our UI
    document.getElementById("filename").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").value = "";

    //create a server a request to load our book

    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();

    xhr.omreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            currentBook = xhr.responseText;

            document.getElementById("fileContent").innerHTML = currentBook;

            var element = document.getElementById("fileContent");
            element.scrollTop = 0;
        }
    }
}