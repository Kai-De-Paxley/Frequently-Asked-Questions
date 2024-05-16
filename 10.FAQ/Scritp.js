//targeting btn dulu dan loopingin
//tambahkan event
//kita cari parent elemrnt dari button untuk menambahkan class
//setelah ketemu paretnya kita akan toggle clas('show-btn)

const button = document.querySelectorAll('.btn');
button.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        const parentEl = e.currentTarget.parentElement.parentElement
        parentEl.classList.toggle('show-btn')
        const questions = document.querySelectorAll(".question") 
        questions.forEach((item) => {
            if(item !== parentEl) {
                item.classList.remove('show-btn')
            }
        })
    })
})