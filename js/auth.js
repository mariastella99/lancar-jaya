//add admin cloud fuction
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminEmail = document.querySelector('#admin-email').value;
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail }).then(result => {
        console.log(result);
    });
});

//listen for auth status changes
auth.onAuthStateChanged(user => {
    //console.log(user)
    if(user){
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
        })
        //get data from collection
        // db.collection('orders').onSnapshot(snapshot => {
        // //console.log(snapshot.docs);
        // setupOrders(snapshot.docs);

        // }, err => {
        //     console.log(err.message)
        // });
        console.log('user logged in: ', user);
    }else {
        setupUI();
        //setupOrders([]);
        console.log('user logged out');
    }
});

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //console.log(email, password)

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            user_name: signupForm['signup-name'].value,
            user_email: signupForm['signup-email'].value,
            user_phone: signupForm['signup-phone'].value,
        });
        //console.log(cred.user);
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        alert("Akun berhasil dibuat");
    });
});

// log out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.replace("index.html")
    // .then(() => {
    //     console.log('User Sign Out')
    // });
});

// sign in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        //close login modal and reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        alert("Berhasil masuk")
    });
});