// log out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    alert('User Sign Out');
    // .then(() => {
    //     console.log('User Sign Out')
    // });
});