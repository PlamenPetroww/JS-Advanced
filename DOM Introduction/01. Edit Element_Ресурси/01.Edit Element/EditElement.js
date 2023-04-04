function editElement(ref, match, replacer) {
    let content = ref.textContent;
    let mather = new RegExp(match, "g");
    let edited = content.replace(mather, replacer);
    ref.textContent = edited;
    debugger
}