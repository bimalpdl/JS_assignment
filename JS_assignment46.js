function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var usernamePattern = /^[a-zA-Z0-9]{4,12}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    if (!usernamePattern.test(username)) {
        alert("Username must contain only letters and numbers and have a length between 4 and 12 characters.");
        return false; 
    }
    
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter and one special character.");
        return false; 
    }
    
    return true;
}
