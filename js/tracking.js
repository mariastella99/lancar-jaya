const resi = document.getElementById('resi').value;
const trackOutput = document.querySelector('#track-output');

function renderTracking(doc) {
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

     var track = trackOutput.appendChild(tr);

     const html = `
        <tbody>
           <tr>
                <th>${courier.textContent}</th>
                <th>${point.textContent}</th>
                <th>${time.textContent}</th>
           </tr>
        </tbody>
         `;
     track.innerHTML = html;
}

function tracking() {

    db.collection("orders").doc(resi).collection("delivery_points").orderBy("delivery_time")
    .get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderTracking(doc)  
          });
    });
}