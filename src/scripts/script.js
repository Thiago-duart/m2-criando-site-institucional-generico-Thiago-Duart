/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function btnScroll() {

    const btn = document.querySelector('#btnScroll')

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        const about = document.querySelector('#about')
        about.scrollIntoView({ behavior: 'smooth' })
    })
}

function modalShowAndClose() {

    const modal = document.querySelector('#modal')
    const btnShowModal = document.querySelectorAll('.openModal')
    const btnCloseModal = document.querySelector('#closeModal')

    btnShowModal.forEach(btn => {
        btn.addEventListener('click', function (e) {
            modal.showModal()
        })
    })
    btnCloseModal.addEventListener('click', function (e) {
        modal.close()
    });
}

function registerEmail() {

    const btnRegister = document.querySelector('#btnRegisterModal')
    const modal = document.querySelector('#modal')

    btnRegister.addEventListener('click', function (e) {

        const register = document.querySelector('#registerModal')
        const email = register.value

        if (email) {
            e.preventDefault()
            modal.close()
            Swal.fire(
                'Parabens!',
                `Em breve entraremos em contato! ${email}`,
                'success'
            )
        }
    })
}

btnScroll()
modalShowAndClose()
registerEmail()
