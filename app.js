const select = document.querySelectorAll(panel)
const selectOne = document.querySelector(panel)
select.forEach((item) => {
    item.addEventListener('click' , () => {
        item.classList.add('active')
    })
})

console.log(select);
console.log(selectOne);

