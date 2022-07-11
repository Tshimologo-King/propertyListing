const propertyList = [
  {
    id: 1,
    title: "Single",
    name: "The Solo",
    description: '',
    amenities: '',
    propertyType: "Single Container Apartment",
    propertyLocation: "Sea Point",
    propertySize: "20ft",
    propertyPrice: 14560,
    image: "https://picsum.photos/300",
  },
];


//STEP 1: FILTER PROPERTIES

function searchFilter(){

    //Retrieve data
    const propertyType = document.querySelector('#propertyType').value;
    const propertyLocation = document.querySelector('#propertyLocation').value;
    const propertySize = document.querySelector('#propertyLocation').value;
    const propertyPrice = document.querySelector('#propertyPrice').value;

    //loop through the list
    //check if the id's match what we want to get from the list
    propertyList.forEach(property =>{

        //check whether class list has a PropertyType Value
        if (propertyList[i].classList.contains(propertyType)) {
          console.log(propertyList(propertyType));
        }
        //check whether class list has a PropertyLocation Value
        else if (propertyList[i].classList.contains(propertyLocation)) {
          console.log(propertyList(propertyLocation));
        }
        //check whether class list has a PropertySize Value
        else if (propertyList[i].classList.contains(propertySize)) {
          console.log(propertyList(propertySize));
        }
        //check whether class list has a PropertyPrice Value
        else if (propertyList[i].classList.contains(propertyPrice)) {
          console.log(propertyList(propertyPrice));
        }
        //display all properties
        else {
          console.log(propertyList[i]);
        }
    }) 

}




//STEP 5: SORT PROPERTIES

function sortProperties(){
    property.innerHTML = '';
    
    //sort variable
    let sortBy = properties.sort(function (a, b){
        if (a.name.toLowerCase() < b.name.toLowerCase()){
            return 1;
        } else{
            return 0;
        }
    });
    console.log(sortBy);
    sortBy.forEach(e => {
        listProperty()
    })

}

