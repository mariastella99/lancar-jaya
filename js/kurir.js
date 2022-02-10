// Getting Documents
const orderList = document.querySelector('#orders-list');

//create element and render
function renderOrders(doc){
     let tr = document.createElement('tr');
     let date = document.createElement('td');
     let sender = document.createElement('td');
     let kota_asal = document.createElement('td');
     let receiver = document.createElement('td');
     let kota_tujuan = document.createElement('td');
     let cost = document.createElement('td');

     tr.setAttribute('data-id', doc.id);
     date.textContent = doc.data().order_time.toDate().toDateString();
     sender.textContent = doc.data().order_sender;
     kota_asal.textContent = doc.data().order_address_origin.address_city;
     receiver.textContent = doc.data().order_receiver;
     kota_tujuan.textContent = doc.data().order_address_destination.address_city;
     cost.textContent = doc.data().order_cost;

     tr.appendChild(date);
     tr.appendChild(sender);
     tr.appendChild(kota_asal);
     tr.appendChild(receiver);
     tr.appendChild(kota_tujuan);
     tr.appendChild(cost);

     var order = orderList.appendChild(tr);

  const html = `
           <tbody>
           <tr id=${doc.id}>
               <th>${doc.id}</th>
               <th>${date.textContent}</th>
               <th>${sender.textContent}</th>
               <th>${kota_asal.textContent}</th>
               <th>${receiver.textContent}</th>
               <th>${kota_tujuan.textContent}</th>
               <th>${cost.textContent}</th>
               <th>
                 <button onclick="toggleDetail(); detail('${doc.id}');">detail</button>
                 <button onclick="toggleView(); view('${doc.id}');">track</button>
                 <button onclick="togglePopup(); update('${doc.id}');">update</button>
               </th>
           </tr>
           </tbody>
         `;
    order.innerHTML = html;
}

db.collection('orders').orderBy("order_time").get().then((snapshot) => {
      //console.log(snapshot.docs);
      snapshot.docs.forEach(doc => {
        renderOrders(doc);  
        //console.log(doc.data());
      })
})