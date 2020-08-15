<script src="./script.js">
        
        </script>
        <div id="robocon-alert">Robocon'20 rektörlüğümüzün kararı nedeniyle ileri bir tarihe ertelenmiştir. Anlayışınız için teşekkür ederiz.</div>
        
document.addEventListener("DOMContentLoaded", function(event) { 
    const alert = document.getElementById('robocon-alert')
    alert.addEventListener('click', () => {
        alert.style.display = 'none'
    })
});