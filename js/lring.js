// 禁止a或者表单提交
//禁止跳转
function ban(e) {
    e.preventDefault()
}
// 隐藏下拉菜单
let navList = document.querySelectorAll('.nav-list')
navList.forEach(item => {
    let id = item.getAttribute('id')
    let button = document.querySelector('[data-target = "#' + id + '"]')
    button.addEventListener('click', function (e) {
        e = e || widnow.event
        ban(e)
        let expanded = this.getAttribute('aria-expanded')
        if (expanded === "false") {
            this.setAttribute('aria-expanded', true)
            item.classList.add("show")
        } else {
            this.setAttribute('aria-expanded', false)
            item.classList.remove("show")
        }
    })
});

// 遮罩层
let imgContainer = document.querySelectorAll('.img_container')
let img = document.querySelectorAll('.img')
console.log(img)

img.forEach(function (item, index) {
    item.setAttribute('index', index)
    img.forEach(function (item, index) {
        item.addEventListener('mouseover', function () {
            imgContainer[index].style.display = 'block'
            item.style.transform = 'scale(1.2)'
        })
        item.addEventListener('mouseout', function () {
            imgContainer[index].style.display = 'none'
            item.style.transform = 'scale(1)'
        })
    })
})