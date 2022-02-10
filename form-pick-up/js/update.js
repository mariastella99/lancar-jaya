const orderForm = document.getElementById('order-form');

//update data
function update(id) {
    document.getElementById('update-form').contentWindow.document.getElementById('input-resi').value = id;
    // window.user_id = id;
    // console.log(window.user_id);
    // orderForm.nomor_resi.value = id;
    // console.log(orderForm.nomor_resi.value);
}

// let user_id = update();
// //console.log(user_id);
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('orders').doc(orderForm.nomor_resi.value).collection('delivery_points')
    .doc(orderForm.delivery_point.value).set({
        delivery_courier_name: orderForm.delivery_courier_name.value,
        delivery_point: orderForm.delivery_point.value,
        delivery_time:firebase.firestore.Timestamp.now(),
    });
    alert("Pesanan Diupdate");
});

// function submitForm() {
//     console.log(orderForm.delivery_point.value);
//     db.collection('orders').doc(window.user_id).collection('delivery_points')
//     .doc(orderForm.delivery_point.value).set({
//         delivery_courier_name: orderForm.delivery_courier_name.value,
//         delivery_point: orderForm.delivery_point.value,
//         delivery_time:firebase.firestore.Timestamp.now(),
//     });
//     alert("Pesanan Diupdate");
// }