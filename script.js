function everythingLoaded() {
    //console.log("everything loaded");
    function copyDiscordTag() {
        console.log("clicked");
        const DISCORD_TAG = "Goofyeet#2005";

        let textArea = document.createElement('textarea');
        textArea.style.display = "none";
        textArea.value = DISCORD_TAG;
        document.body.appendChild(textArea);

        navigator.clipboard.writeText(textArea.value);
    }

    let discord = document.getElementById("discord");
    discord.addEventListener("click", copyDiscordTag);

    const path = window.location.pathname;
    const htmlDoc = path.split("/").pop();

    let colorChanger = document.getElementById("color");

    function changeTheme() {
        let selectedTheme = colorChanger.querySelector("input[name=color]:checked").value;
        if (selectedTheme == "dark") {
            document.documentElement.style.setProperty("--primary", "#262626");
            document.documentElement.style.setProperty("--secondary", "#595959");
            document.documentElement.style.setProperty("--tertiary", "#d9d9d9");
        }
        else if (selectedTheme == "light") {
            document.documentElement.style.setProperty("--primary", "#d9d9d9");
            document.documentElement.style.setProperty("--secondary", "#262626");
            document.documentElement.style.setProperty("--tertiary", "#595959");
        }
        else {
            document.documentElement.style.setProperty("--primary", "#337aa6");
            document.documentElement.style.setProperty("--secondary", "#074073");
            document.documentElement.style.setProperty("--tertiary", "#0a1326");
        }
    }

    colorChanger.addEventListener("click", changeTheme);

    //if the current html page is index.html, create photo gallery
    if (htmlDoc == "index.html") {
        let photoGallery = ["space.png", "space2.jpg", "space3.png", "space4.png", "space5.png"];
        let path = "./images/hero/";
        let gallerySelect = 0;

        let heroDiv = document.getElementById("heroDiv");
        let newImg = document.createElement("img");
        newImg.id = "galleryPic";
        newImg.style.height = "5vw";
        newImg.alt = "James Webb Telescope Space Picture";

        newImg.src = path + photoGallery[gallerySelect];
        heroDiv.style.backgroundImage = `url(${path}` + photoGallery[gallerySelect];

        heroDiv.appendChild(newImg);

        let numChanges = 0;

        //event handler that changes the hero image
        function changeHero() {
            numChanges++;
            if (gallerySelect < photoGallery.length - 1) {
                gallerySelect++;
            }
            else {
                gallerySelect = 0;
            }

            newImg.src = path + photoGallery[gallerySelect];
            heroDiv.style.backgroundImage = `url(${path}` + photoGallery[gallerySelect];

            if (numChanges == 10) {
                alert("I'm glad you're having fun changing the hero, but please just pick one...");
                numChanges = 0;
            }
        }

        newImg.addEventListener("click", changeHero);
    }

    else if (htmlDoc == "projects.html") {
        let textArea = document.getElementById("searchBox");
        let search = document.getElementById("search");

        search.addEventListener("click", function (event) {
            if (textArea.value == "") {
                event.preventDefault();
            }
            else{
                console.log(search.value);
            }
        })

        //alternate between red and black text
        textArea.addEventListener("input", function (event) {
            let value = event.target.value;
            let newColor = ["red", "black"];
            let pick = value.length % newColor.length;

            textArea.style.color = newColor[pick];
        })
    }

}

document.addEventListener("DOMContentLoaded", everythingLoaded);
