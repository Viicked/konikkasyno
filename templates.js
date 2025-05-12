function load_header() {
    let header = document.createElement("div");
    header.classList.add("top-bar");
    let logo = document.createElement("div");
    logo.classList.add("logo");
    header.append(logo);
    let elements = document.createElement("div");
    elements.classList.add("text-headers");
    
    let main_page = document.createElement("a");
    main_page.classList.add("top-text");
    main_page.innerText = "Strona Główna";
    main_page.href = "../main_page/"
    let locations = document.createElement("a");
    locations.classList.add("top-text");
    locations.innerText = "Lokalizacje";
    locations.href = "../locations/";
    let about = document.createElement("a");
    about.classList.add("top-text");
    about.innerText = "O Nas";
    about.href = "../about/";
    let contact = document.createElement("a");
    contact.classList.add("top-text");
    contact.innerText = "Kontakt";
    contact.href = "../contact/";
    let login = document.createElement("a");
    login.classList.add("top-text");
    login.innerText = "Zaloguj się";
    login.href = "../login/";
    
    elements.append(main_page);
    elements.append(locations);
    elements.append(about);
    elements.append(contact);
    elements.append(login);

    header.append(elements);
    document.body.prepend(header);
    load_footer()
}
function load_header() {
    const header = document.createElement("div");
    header.classList.add("top-bar");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    header.append(logo);
    const elements = document.createElement("div");
    elements.classList.add("text-headers");

    const links = [
        { text: "Strona Główna", href: "../main_page/" },
        { text: "Lokalizacje", href: "../locations/" },
        { text: "O Nas", href: "../about/" },
        { text: "Kontakt", href: "../contact/" },
        { text: "Zaloguj się", href: "../login/" },
    ];

    links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.classList.add("top-text");
        anchor.innerText = link.text;
        anchor.href = link.href;
        elements.append(anchor);
    });

    header.append(elements);
    document.body.prepend(header);
    load_footer();
}

function load_footer() {
    const footer = document.createElement("div");
    footer.classList.add("bottom-bar");
    const elements = document.createElement("div");
    elements.classList.add("text-footer");
    const rows = [
        [
            { text: "Konikowo 74a" },
            { text: "janik.zs9e@gmail.com" },
        ],
        [
            { text: "ul. Zaścianków 15" },
            { text: "tel. +48 123 456 789" },
        ],
        [
            { text: "Copyright Konikowo Casino" },
        ],
    ];

    rows.forEach((row, index) => {
        const rowElement = document.createElement("div");
        rowElement.classList.add("row-footer");
        row.forEach((item) => {
            const paragraph = document.createElement("p1");
            paragraph.innerText = item.text;
            rowElement.append(paragraph);
        });
        elements.append(rowElement);
    });

    footer.append(elements);
    document.body.append(footer);
}

function ShowAdd() {
    const sigma = document.createElement("video");
    sigma.classList.add("popup");
    sigma.setAttribute("loop", "");

    setTimeout(() => sigma.play(), 1000);
    const video = document.createElement("source");
    video.src = "resource/sigma.mp4";
    video.type = "video/mp4";
    sigma.append(video);
    sigma.onclick = () => sigma.remove();
    document.body.append(sigma);
}function load_footer() {
    let footer = document.createElement("div");
    footer.classList.add("bottom-bar");
    let elements = document.createElement("div");
    elements.classList.add("text-footer");
    let row_1 = document.createElement("div");
    row_1.classList.add("row-footer");
    let row_2 = document.createElement("div");
    row_2.classList.add("row-footer");
    let row_3 = document.createElement("div");
    row_3.classList.add("row-footer");
    let copyright = document.createElement("p1");
    copyright.innerText = "Copyright Konikowo Casino";
    let phone_number = document.createElement("p1");
    phone_number.innerText = "tel. +48 123 456 789";
    let email = document.createElement("p1");
    email.innerText = "janik.zs9e@gmail.com"
    let street = document.createElement("p1");
    street.innerText = "ul. Zaścianków 15"
    let address = document.createElement("p1");
    address.innerText = "Konikowo 74a"

    row_1.append(address);
    row_1.append(email);
    row_2.append(street);
    row_2.append(phone_number);
    elements.append(row_1);
    elements.append(row_2);
    elements.append(copyright);
    footer.append(elements);

    document.body.append(footer);
}

function ShowAdd() {
    let sigma = document.createElement("video");
    sigma.classList.add("popup");
    sigma.setAttribute("loop", "");

    setTimeout(() => sigma.play(), 1000);
    let video = document.createElement("source");
    video.src = "resource/sigma.mp4";
    video.type = "video/mp4";
    sigma.append(video);
    sigma.onclick = () => sigma.remove();
    document.body.append(sigma);
}