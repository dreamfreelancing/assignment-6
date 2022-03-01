const searchPhone = () =>{
    const searchFild = document.getElementById('search-field');
    const searchText = searchFild.value;
    searchFild.value = '';
    if(searchText == 0){
   
      console.log('please write something');
    }
    
    else{
      const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displatSearchResult(data.data));
    }
    // console.log(searchText);
    
    
}
    const displatSearchResult = data =>{
    // console.log(data)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    data.forEach(datas => {
        // console.log(datas);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div class="card h-100">
        <img src="${datas.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas.brand}</h5>
          <p class="card-text">${datas.phone_name.slice(0, 150)}</p>
          <a onclick="loadPhoneDetail()" class="btn btn-primary">See More...</a>

        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
    
}
const loadPhoneDetail = id =>{
    console.log(id);
    
  //dainamic vabe add korte hobe but link add korte parci na ..

    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data))
}
const displayPhoneDetail = data => {
      console.log(data);
    const PhoneDetail = document.getElementById('phone-ditails');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-body">
    <img src="apple-iphone-13-pro-max.jpg" class="card-img-top" alt="...">
      <h3 class="card-title">Apple</h3>
      <p class="card-text">Apple Introduces iPhone 13 and iPhone 13 mini, Delivering Breakthrough Camera Innovations and a Powerhouse Chip with an Impressive Leap in Battery Life</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    PhoneDetail.appendChild(div);
    
}