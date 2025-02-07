document.addEventListener("DOMContentLoaded", function() {
    const aboutContainer = document.createElement("div");
    aboutContainer.style.textAlign = "center";
    aboutContainer.style.padding = "20px";
    aboutContainer.style.backgroundColor = "#FFFFFF";
    aboutContainer.style.color = "#000";
    aboutContainer.style.borderRadius = "10px";
    aboutContainer.style.margin = "20px auto";
    aboutContainer.style.width = "60%";
    aboutContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";

    const title = document.createElement("h2");
    title.textContent = "About This Business";
    aboutContainer.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Sweet Life is run by a young 13-year-old entrepreneur, Bria Griffin. The purpose of this clothing line is to represent the opposite of this urban society we are living in. My father, Lance Griffin, runs the clothing line Sour Life to represent how sour life can be and not turn out the way we would always like. My clothing line is also meant to encourage young people around my age to be successful entrepreneurs.";
    description.style.fontSize = "1.2rem";
    description.style.lineHeight = "1.6";
    description.style.marginTop = "10px";
   
    aboutContainer.appendChild(description);
    document.body.appendChild(aboutContainer);
});

