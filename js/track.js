const viewOutput = document.querySelector('#reset-view');

function renderView(doc) {
    console.log(doc);
    let tr = document.createElement('tr');
    let courier = document.createElement('td');
    let point = document.createElement('td');
    let time = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    courier.textContent = doc.data().delivery_courier_name;
    point.textContent = doc.data().delivery_point;
    time.textContent = doc.data().delivery_time.toDate().toDateString() + doc.data().delivery_time.toDate().toLocaleTimeString();

    tr.appendChild(courier);
    tr.appendChild(point);
    tr.appendChild(time);

    var view = viewOutput.appendChild(tr);

    const html = `
          <tr>
               <td>${courier.textContent}</td>
               <td>${point.textContent}</td>
               <td>${time.textContent}</td>
          </tr>
        `;
    view.innerHTML = html;
}

function view(id) {
    db.collection("orders").doc(id).collection("delivery_points").orderBy("delivery_time")
    .get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderView(doc)  
          });
    });
}