const t=document.getElementById("data"),e=document.getElementById("search"),n=document.getElementById("loading"),i=document.getElementById("ingredients-div");let c=[],s=[],l=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];async function a(){for await(let t of l)await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+t).then(t=>t.json()).then(t=>{null!==t.drinks&&o(t.drinks)});await function(){for(let t of c=(c=c.sort()).splice(1,c.length)){let e=document.createElement("p");e.textContent=t,e.addEventListener("click",t=>{e.classList.toggle("selected")}),e.setAttribute("class","ingredient"),i.appendChild(e)}}(),r()}async function o(t){await t.forEach(async t=>{d(t)})}async function d(e){let n=document.createElement("div"),i=document.createElement("h1"),s=document.createElement("img"),l=function(t){let e="";for(let n=1;n<=15;n++){let i=t["strIngredient"+n];if(null!==i){e+=i+",",c.includes(i)||c.push(i);continue}break}return e.slice(0,e.length-1)}(e);s.src=e.strDrinkThumb+"/preview",i.textContent=e.strDrink,n.dataset.ingredients=l,n.appendChild(s),n.appendChild(i),n.setAttribute("id",e.idDrink),n.setAttribute("class","cocktail show"),t.appendChild(n)}async function r(){s=document.getElementsByClassName("cocktail"),e.value="",document.body.removeAttribute("id"),n.removeAttribute("id"),n.setAttribute("class","none")}e.addEventListener("input",t=>{for(let n of(t.preventDefault(),s))n.childNodes[1].textContent.toLowerCase().includes(e.value.toLowerCase())?n.setAttribute("class","cocktail"):n.setAttribute("class","cocktail none")}),a();
//# sourceMappingURL=index.16f02006.js.map