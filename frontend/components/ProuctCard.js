function printProductCard(item) {
    return `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">${item.price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    
    
    `;
}


