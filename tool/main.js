// 自动点击加载更多按钮
const btn = document.querySelector('.load-more-btn')

const isHidden = function(element) {
    const style = window.getComputedStyle(element)
    console.log(style.display)
    return (style.display === 'none')
}
var interval = setInterval(() => {
    if (!isHidden(btn)) {
        btn.click()
    } else {
        clearInterval(interval)
    }
}, 500)