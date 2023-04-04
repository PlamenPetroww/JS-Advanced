function search() {
   let townList = Array.from(document.querySelectorAll('ul li'));
   let searchedText = document.getElementById('searchText').value;

   let counter = 0;
   for(let el of townList) {
      let text = el.textContent;
      if(text.includes(searchedText)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         counter++;
      } else {
         el.style.textDecoration = 'none';
         el.style.fontWeight = '';
      }
   }
   document.getElementById('result').innerText = `${counter} matches found`
}
