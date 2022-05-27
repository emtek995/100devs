const update = document.querySelector("#update-button");
const del = document.querySelector("#delete-button");
const messageDiv = document.querySelector('#message');

update.addEventListener("click", (_) => {
    fetch("/quotes", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Darth Vader",
            quote: "lolz",
        }),
    })
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((response) => {
            console.log(response);
        });
});

del.addEventListener("click", (_) => {
    fetch("/quotes", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Darth Vader",
        }),
    })
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((response) => {
            if (response === 'No quote to delete!') {
                messageDiv.textContent = 'OMG no quote to go bye bye!';
            }
            console.log(response);
        });
});

