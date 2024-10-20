document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('registerlink');
    const slotStatus = document.getElementById('slot-status');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const warningMessage = document.createElement('p'); 


    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    async function checkGoogleFormStatus() {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwNFMqL61iNgL3RGVum9UT6S_NzoGCFDVPTnCVKmR4qYqRXMqHNlTsw7XYaYVqoMill-g/exec'; 
        // scriptUrl is deployment after webURL
        try {
            const response = await fetch(scriptUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data.status === 'available') {
                slotStatus.textContent = 'Slots Available';
                enableRegisterLink();  
            } else {
                slotStatus.textContent = 'Slots Unavailable';
                disableRegisterLink();  
                showWarning('Warning: Slots are currently unavailable.');
            }
        } catch (error) {
            console.error("Error fetching form status:", error);
            slotStatus.textContent = 'Error fetching form status. Please try again later.';
            disableRegisterLink();
            showWarning('Warning: Unable to check form status. Please try again later.');
        }
    }

    function disableRegisterLink() {
        registerLink.classList.add('disabled');
        registerLink.style.pointerEvents = 'none';
        registerLink.style.opacity = '0.5';
        registerLink.style.cursor = 'not-allowed';
        registerLink.removeAttribute('href');
        registerLink.addEventListener('click', handleModalOpen);
    }

    function enableRegisterLink() {
        registerLink.classList.remove('disabled');
        registerLink.style.pointerEvents = 'auto';
        registerLink.style.opacity = '1';
        registerLink.style.cursor = 'pointer';
        registerLink.href = 'https://forms.gle/92STqvQGxjMLsRrZ7'; //  Google Form link
        registerLink.removeEventListener('click', handleModalOpen);
    }

    function handleModalOpen(event) {
        event.preventDefault();
        openModal();
    }

    function showWarning(message) {
        warningMessage.textContent = message;
        warningMessage.style.color = 'red'; 
        modal.querySelector('.modal-content').appendChild(warningMessage); 
        openModal();
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    checkGoogleFormStatus();
});
