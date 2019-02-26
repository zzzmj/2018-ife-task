const link = document.querySelectorAll('link')
const toggle = document.querySelector('.toggleStyle')

const init = () => {
    showStyle(0)
}

const showStyle = (index) => {
    // 显示第index个样式, 隐藏其他的样式
    for (let i = 0; i < link.length; i++) {
        link[i].disabled = true
    }
    link[index].disabled = false
}

const __main = () => {
    init()
    toggle.addEventListener('click', (e) => {
        const index = e.target.dataset.index
        showStyle(index)
    })
}   

__main()