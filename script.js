let capturarh1 = document.querySelector('h1');
console.log(capturarh1);

let capturarUl = document.querySelector('ul');
console.log(capturarUl);

let capturarA = document.querySelector('a');
console.log(capturarA);

let capturarOl = document.querySelector('ol');
console.log(capturarOl);

capturarh1.innerText = 'Texto adicionado';

capturarA.innerText = 'Click aqui e entre no site da proz';

capturarUl.innerText = `
<li>Link 01</li>;
<li>Link 02</li>
<li>Link 03</li>
`;

capturarOl.innerHTML = `
<li><a href="https://google.com.br">Site do Google</a></li>
<li><a href="https://inscricao.prozeducacao.com.br/home-2024/">Site da proz</a></li>
<li><a href="https://inscricao.prozeducacao.com.br/home-2024/">Site Correio Web</a></li>
`;
