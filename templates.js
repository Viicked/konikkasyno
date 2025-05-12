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

    rows.forEach((row) => {
        const rowElement = document.createElement("div");
        rowElement.classList.add("row-footer");
        row.forEach((item) => {
            const paragraph = document.createElement("p");
            paragraph.innerText = item.text;
            rowElement.append(paragraph);
        });
        elements.append(rowElement);
    });

    footer.append(elements);
    document.body.append(footer);
}
