const li = document.querySelectorAll('.banner-indicators li')
const tabs = document.querySelectorAll('.nav-tabs li')

const toggle = (NodeList, index, className) => {
    for (let i = 0; i < NodeList.length; i++) {
        NodeList[i].classList.remove(className)
    }
    NodeList[index].classList.add(className)
}

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        toggle(li, i, 'active')
    })
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        toggle(tabs, i, 'active')
    })
}
