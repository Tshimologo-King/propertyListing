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

// STEP 2: DISPLAY PROPERTIES IN HTML

function listProperty(){

    //create variable that will display
    const property = document.getElementById('discover');
    //include it in storage
    const properties = JSON.parse(localStorage.getItem('records') || '[]')
    console.table(properties);

    //display properties in HTML
    property.innerHTML = '';
    
    //Loop the properties record
    propertyList.forEach(e =>{
        property.innerHTML += ` <div class="card" style="width: 100%;">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6 class="title">${propertyList.name}</h6>
                            <img src="${propertyList.image}"  alt="Solo House Container">
                            <div class="card-body">
                                <p class="card-text">${propertyList.description}
                                </p>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <p class="back-card-text">${propertyList.amenities}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    console.table(properties);
} 
//Display properties
listProperty();


//STEP 3: ADD PROPERTIES INTO LIST CREATED

function addNewProperty(){

    //get button value
    const newProperty = document.querySelector('#addNewProperty').value;

    propertyList.forEach((newListing) =>{
         property.innerHTML += ` <div class="card" style="width: 100%;">
                     <div class="flip-card">
                         <div class="flip-card-inner">
                             <div class="flip-card-front">
                                 <h6 class="title">${propertyList.name}</h6>
                                 <img src="${propertyList.image}"  alt="Solo House Container">
                                 <div class="card-body">
                                     <p class="card-text">${propertyList.description}
                                     </p>
                                 </div>
                             </div>
                             <div class="flip-card-back">
                                 <p class="back-card-text">${propertyList.amenities}
                                 </p>
                             </div>
                         </div>
                     </div>
             </div>`;
    })
}


//STEP 4: DELETE PROPERTY

function removeAddedProperty(){
    if(id > 1){
        propertyList.splice(id, 1);
        localStorage.setItem('records', JSON.stringify(propertyList))
    }
}

//OR 

function removeAddedProperty(){

    const index = propertyList.findIndex(id => propertyList.id == id);
    const deleteProp = doxument.getElemntById('removeAddedProperty').value;

    console.log(index);
    removeAddedProperty(index);
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

//BUTTONS FOR FUNCTIONALITY

const addNewProperty = document.querySelector('#addNewProperty').addEventListener('click', addNewProperty);
const deletePropertyListed = document.querySelector('#removeAddedProperty').addEventListener('click', removeAddedProperty);