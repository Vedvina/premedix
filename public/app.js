document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            console.log('User signed in:', user);

            // Redirect to admin_dashboard.html
            window.location.href = 'admin_dashboard.html';
        })
        .catch(error => {
            console.error('Error during sign-in:', error);
        });
}
