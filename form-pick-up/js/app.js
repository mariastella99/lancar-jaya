// Getting Documents
const orderForm = document.querySelector('#order-form');
const orderResi = document.querySelector('#no-resi');

//saving data
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
        db.collection('orders').add({
            order_sender: orderForm.sender_name.value,
            order_address_origin: {
                address_province: orderForm.sender_provinsi.value,
                address_city: orderForm.sender_kota.value,
                address_district: orderForm.sender_subdistrict.value,
                // address: orderForm.sender_address.value,
                post_code: orderForm.sender_postalcode.value
            },
            order_receiver: orderForm.receiver_name.value,
            order_address_destination: {
                address_province: orderForm.receiver_provinsi.value,
                address_city: orderForm.receiver_kota.value,
                address_district: orderForm.receiver_subdistrict.value,
                // address: orderForm.receiver_address.value,
                post_code: orderForm.receiver_postalcode.value
            },
            order_item: orderForm.item_name.value,
            order_weight: parseInt(orderForm.item_weight.value),
            order_quantity: parseInt(orderForm.item_quantity.value),
            order_description: orderForm.item_desc.value,
            order_time:firebase.firestore.Timestamp.now(),
            // order_source: orderform.tipe_ekspedisi.value,
            // order_package_type: orderform.tipe_paket.value,
            order_cost: parseInt(orderForm.cost.value),
        });
        alert("Pesanan Dibuat!");

        db.collection('orders').where('order_sender', '==', orderForm.sender_name.value)
        .get().then((snapshot) => {
            snapshot.forEach((doc) =>{
                console.log(doc.id);

                const html =`
                    <span>Nomor Resi Anda : ${doc.id}<span>
                `;

                orderResi.innerHTML = html;
            })
        })
});