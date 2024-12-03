<script setup>
const registerUser = (newUser) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push({
        name: newUser.name,
        password: newUser.password,
        isAdmin: newUser.isAdmin
    });
    localStorage.setItem('users', JSON.stringify(storedUsers));
}
</script>