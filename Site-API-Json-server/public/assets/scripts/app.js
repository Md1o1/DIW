async function getUserProfile() {
    const username = document.getElementById('username').value;
    const output = document.getElementById('output');
    
    try {
        const response = await fetch(`https://api.github.com/users/Md1o1`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}


https://api.github.com/repos/Md1o1/DIW