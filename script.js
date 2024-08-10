var arr = [
    {
        name: "Pukar Photo",
        Image: "https://plus.unsplash.com/premium_photo-1690487577999-6424ed2ffa67?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Binayak Photo",
        Image: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aayush Photo",
        Image: "https://images.unsplash.com/photo-1723126638018-b18d997f4058?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Niraj Photo",
        Image: "https://images.unsplash.com/photo-1721742145312-9264de4cd63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Binayak Photo",
        Image: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Pukar Photo",
        Image: "https://plus.unsplash.com/premium_photo-1690487577999-6424ed2ffa67?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aayush Photo",
        Image: "https://images.unsplash.com/photo-1723126638018-b18d997f4058?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]



function showImage() {
    var clutters = "";
    arr.forEach(function (obj) {
        clutters += ` <div class="box">
                        <img class="cursor-pointer" src="${obj.Image}"></img>
                        <div class="caption">${obj.name}</div>
                    </div>`
            ;
    })
    document.querySelector(".container")
        .innerHTML = clutters;
}

function searchimage() {
    var searchinput = document.querySelector("#searchinput");
    searchinput.addEventListener("focus", function () {
        document.querySelector(".overlay").style.display = "block";
    })


    searchinput.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
    })
    searchinput.addEventListener("input", function () {
        const filteredarray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchinput.value));
        var clutter = "";

        filteredarray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
    <i class="ri-search-line font-semibold mr-5"></i>
    <h3 class="font-semibold">${obj.name}</h3>
    </div>`
        })
        document.querySelector(".searchdata ").style.display = "block";
        document.querySelector(".searchdata ").innerHTML = clutter;
    })

}

showImage();
searchimage();