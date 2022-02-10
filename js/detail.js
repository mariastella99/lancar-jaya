const detailOutput = document.querySelector('#orders-detail');

function renderDetail(doc) {
     let li = document.createElement('li');
     let sender = document.createElement('span');
     let sender_province = document.createElement('span');
     let sender_city = document.createElement('span');
     let sender_district = document.createElement('span');
     // let sender_address = document.createElement('span');
     let sender_poscode = document.createElement('span');
     let receiver = document.createElement('span');
     let receiver_province = document.createElement('span');
     let receiver_city = document.createElement('span');
     let receiver_district = document.createElement('span');
     // let receiver_address = document.createElement('span');
     let receiver_poscode = document.createElement('span');
     let item = document.createElement('span');
     let weight = document.createElement('span');
     let quantity = document.createElement('span');
     let description = document.createElement('span');
     let time = document.createElement('span');

     li.setAttribute('data-id', doc.id);
     sender.textContent = doc.data().order_sender;
     sender_province.textContent = doc.data().order_address_origin.address_province;
     sender_city.textContent = doc.data().order_address_origin.address_city;
     sender_district.textContent = doc.data().order_address_origin.address_district;
     // sender_address.textContent = doc.data().order_address_origin.address;
     sender_poscode.textContent = doc.data().order_address_origin.post_code;
     receiver.textContent = doc.data().order_receiver;
     receiver_province.textContent = doc.data().order_address_destination.address_province;
     receiver_city.textContent = doc.data().order_address_destination.address_city;
     receiver_district.textContent = doc.data().order_address_destination.address_district;
     // receiver_address.textContent = doc.data().order_address_destination.address;
     receiver_poscode.textContent = doc.data().order_address_destination.post_code;
     item.textContent = doc.data().order_item;
     weight.textContent = doc.data().order_weight;
     quantity.textContent = doc.data().order_quantity;
     description.textContent = doc.data().order_description;
     time.textContent = doc.data().order_time.toDate().toDateString() + " " + doc.data().order_time.toDate().toLocaleTimeString();

     li.appendChild(sender);
     li.appendChild(sender_province);
     li.appendChild(sender_city);
     li.appendChild(sender_district);
     // li.appendChild(sender_address);
     li.appendChild(sender_poscode);
     li.appendChild(receiver);
     li.appendChild(receiver_province);
     li.appendChild(receiver_city);
     li.appendChild(receiver_district);
     // li.appendChild(receiver_address);
     li.appendChild(receiver_poscode);
     li.appendChild(item);
     li.appendChild(weight);
     li.appendChild(quantity);
     li.appendChild(description);
     li.appendChild(time);

     var detail = detailOutput.appendChild(li);

     const html = `
           <li>
                <span>No.Resi : ${doc.id}</span><br>
                <span>Nama Pengirim :${sender.textContent}</span><br>
                <span>Provinsi Pengirim : ${sender_province.textContent}</span><br>
                <span>Kota Pengirim : ${sender_city.textContent}</span><br>
                <span>Kecamatan Pengirim : ${sender_district.textContent}</span><br>
                <span>Kode Pos Pengirim : ${sender_poscode.textContent}</span><br>
                <span>Nama Penerima : ${receiver.textContent}</span><br>
                <span>Provinsi Penerima : ${receiver_province.textContent}</span><br>
                <span>Kota Penerima : ${receiver_city.textContent}</span><br>
                <span>Kecamatan Penerima : ${receiver_district.textContent}</span><br>
                <span>Kode Pos Penerima : ${receiver_poscode.textContent}</span><br>
                <span>Nama Barang : ${item.textContent}</span><br>
                <span>Berat Barang : ${weight.textContent}</span><br>
                <span>Kuantitas Barang : ${quantity.textContent}</span><br>
                <span>Deskripsi Barang : ${description.textContent}</span><br>
                <span>Waktu Order : ${time.textContent}</span><br>
           </li>
         `;
     detail.innerHTML = html;
}

function detail(id) {
    db.collection("orders").doc(id)
    .onSnapshot(function(doc) {
    renderDetail(doc);
    });
}