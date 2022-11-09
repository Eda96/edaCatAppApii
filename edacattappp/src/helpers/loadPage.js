export const loadPage = (initPage , parameter) => {
    const {element} = initPage (parameter)
    const rootEl = document.querySelector("#root")
    rootEl.innerHTML = ""
    rootEl.appendChild(element)
}
