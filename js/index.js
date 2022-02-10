// const orderList = document.querySelector('.orders');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');

const setupUI = (user) => {
  if(user) {
    if(user.admin){
      adminItems.forEach(item => item.style.display = 'block');
      window.open("kurir.html")
    }
    //account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div>Logged in as ${user.email}</div>
      <div class="pink-text">Your role is ${user.admin ? 'Kurir' : 'User'}</div>
      `;
      accountDetails.innerHTML = html;
    })
    
    //toggle UI
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    adminItems.forEach(item => item.style.display = 'none');
    //hide account info
    accountDetails.innerHTML = '';
    //toggle UI
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

// //setup orders
// const setupOrders = (data) => {
  
//   if (data.length) {
//   let html = '';
//   data.forEach(doc => {
//     const order = doc.data();
//     //console.log(order);
//     const li = `
//       <li>
//         <div class="collapsible-header grey lighten-4">Nomor Resi : ${doc.id}</div>
//         <div class="collapsible-body white">
//           <h6>Nama Pengirim : ${order.order_sender}</h6>
//           <h6>Nama Penerima : ${order.order_receiver}</h6>
//         </div>
//       </li>
//     `;
//     html += li
//   });

//   orderList.innerHTML = html;
// } else {
//   orderList.innerHTML = '<h5 class="center-align">Login to view order</h5>'
// }

// }

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });