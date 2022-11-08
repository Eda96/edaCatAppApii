export const loadPage = (initPage , number) => {
    const {element} = initPage (number)
    const rootEl = document.querySelector("#root")
    rootEl.innerHTML = ""
    rootEl.appendChild(element)
}
