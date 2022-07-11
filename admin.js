// //create objact array
const properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        id: 1,
        title: "Single Container Apartment",
        name: "The Solo",
        type: "Single Container",
        location: "Claremont, Western Cape",
        price: 25450,
        image: "https://picsum.photos/300",
      },
      {
        id: 2,
        title: "Double Container Apartment",
        name: "Jozi Express",
        type: "20ft Double Container",
        location: "Central Town CBD, Western Cape",
        price: 26450,
        image: "https://picsum.photos/300",
      },
      {
        id: 3,
        title: "Single Container Apartment",
        name: "Divergence",
        type: "40ft Single Container",
        location: "Observatory, Western Cape",
        price: 34450,
        image: "https://picsum.photos/300",
      },
      {
        id: 4,
        title: "Single Container Office Workspace",
        name: "The Beginning",
        type: "40ft Single Container",
        location: "Bellville, Western Cape",
        price: 21450,
        image: "https://picsum.photos/300",
      },
      {
        id: 5,
        title: "Double Container Office Workspace",
        name: "The Continental",
        type: "40ft Double Container",
        location: "Sea Point, Western Cape",
        price: 30670,
        image: "https://picsum.photos/300",
      },
    ];

// function readProperties() {
//   const propertyTitle = document.querySelector("#propertyTitle").value;
//   const propertyType = document.querySelector("#propertyType").value;
//   const propertyLocation = document.querySelector("#propertyLocation").value;
//   const propertyPrice = document.querySelector("#propertyPrice").value;
//   const propertyImg = document.querySelector("#propetyImage").value;

//   try {
//     if (!propertyTitle || !propertyPrice || !propertyLocation || !propertyType)
//       throw new Error("Please fill in all fields");
//     properties.push({ property });
//     localStorage.setItem("properties", JSON.striginfy(properties));
//     readProperties(properties);
//   } catch (err) {
//     alert(err);
//   }

//   localStorage.setItem("properties", JSON.stringify(properties));
//   readProperties(properties);
// }

// // console.log(properties);

// //STEP 2: DISPLAY THE PROPERTIES IN HTML
// //ADJUST INTO CARD FORMAT

function displayProperties(properties) {
  //create a variable that will get the id in html
  const propertyList = document.getElementById("listOfProperties");
  listOfProperties.innerHTML = "";

  //Loop through properties to get values onto the screen
  properties.forEach((property) => {
    //html display
    listOfProperties.innerHTML += `
        <tr>
            <td>${property.id}</td>
            <td><input id="propertyTitle${property.id}" ${property.title}</td>
            <td><input id="propertyName${property.name}"</td>
            <td><img src=${property.image} alt=${property.title}</td>
            <td><input id="propertyType${property.type}"</td>
            <td><input id="propertyLocation${property.location}"</td>
            <td><input id="propertyPrice${property.price}"</td>
            <td><button id="editProperty(${property.id})">edit</button></td>
            <td><button id="saveProperty(${property.id})">save</button></td>
            <td><button id="removeAddedProperty(${property.id}" onclick="removeAddedProperty(${property.id})">delete</button></td>
        </tr>
    `;
  });
}
displayProperties(properties);
// localStorage.setItem("properties", JSON.stringify(properties));
// displayProperties(properties);

//STEP 3: ADD FUNCTION
//ADD A NEW LISTING INTO PROPERTYlIST
function addNewPropertyListing() {
  //Get Values that will be inputed
  //Retrieve data
  const propertyTitle = document.querySelector("#propertyTitle").value;
  const propertyName = document.querySelector('#propertyName').value;
  const propertyType = document.querySelector("#propertyType").value;
  const propertyCategory = document.querySelector("#propertyCategory").value;
  const propertyImg = document.querySelector("#propertyImg").value;
  const propertyLocation = document.querySelector("#propertyLocation").value;
  const propertyPrice = document.querySelector("#propertyPrice").value;
  const propertyOwner = document.querySelector("#propertyOwner").value;

  //get button value
  const newProperty = document.querySelector("#addNewPropertyListing").value;

  properties.forEach((newListing) => {
    listOfProperties.innerHTML += `
        <tr>
            <td>${property.id}</td>
            <td><input id="propertyTitle${property.id}" ${property.title}</td>
            <td><input id="propertyName${property.name}"</td>
            <td><img src=${property.image} alt=${property.title}</td>
            <td><input id="propertyType${property.type}"</td>
            <td><input id="propertyLocation${property.location}"</td>
            <td><input id="propertyPrice${property.price}"</td>
            <td><button id="editProperty(${property.id})">edit</button></td>
            <td><button id="saveProperty(${property.id})">save</button></td>
            <td><button id="removeAddedProperty(${property.id}" onclick="removeAddedProperty(${property.id})">delete</button></td>
        </tr>
    `;
  });
}

//STEP 4: DELETE PROPERTY

function removeAddedProperty() {
  if (id > 1) {
    properties.splice(id, 1);
  }
}

// //OR

// function removeAddedProperty() {
//   const index = propertyList.findIndex((id) => properties.id == id);
//   const deleteProp = document.getElemntById("removeAddedProperty").value;

//   console.log(index);
//   removeAddedProperty(index);
// }

function editPropertyListing() {

  document.querySelector(`#propertyTitle${id}`).contentEditable = true;
  document.querySelector(`#propertyName${id}`).contentEditable = true;
  document.querySelector(`#propertyType${id}`).contentEditable = true;
  document.querySelector(`#propertyCategory${id}`).contentEditable = true;
  document.querySelector(`#propertyLocation${id}`).contentEditable = true;
  document.querySelector(`#propertyImg${id}`).contentEditable = true;
  document.querySelector(`#propertyPrice${id}`).contentEditable = true;
  document.querySelector(`#propertyOwner${id}`).contentEditable = true;

}

// //BUTTONS FOR FUNCTIONALITY

// const newPropertyListing = document
//   .querySelector("#addNewPropertyListing")
//   .addEventListener("click", addNewPropertyListing);
// const deletePropertyListed = document
//   .querySelector("#removeAddedProperty")
//   .addEventListener("click", removeAddedProperty);
// const editProperty = document
//   .querySelector("#editPropertyListed")
//   .addEventListener("click", editPropertyListing);

// function addNewListing() {
//   $("#addNewListing").onclick("click", addNewListing());

//   let id,
//     listingName,
//     listingType,
//     listingCategory,
//     listingImage,
//     listingPrice,
//     listingOwner;

//   id = $("#listingID").value;
//   listingName = $("#listingName").value;
//   listingType = $("#listingType").value;
//   listingCategory = $("#listingCategory").value;
//   listingImage = $("#listingImage").value;
//   listingPrice = $("#listingPrice").value;
//   listingOwner = $("#listingOwner").value;

//   let editButton = "<a class='edit' href='Javascriot:void(0)';>Edit</a>";
//   let deleteButton = "<a class='delete' href='Javascriot:void(0)';>Delete</a>";

//   if (
//     listingName == "" ||
//     listingType == "" ||
//     listingCategory == "" ||
//     listingImage == "" ||
//     listingPrice == "" ||
//     listingOwner == ""
//   ) {
//     alert("All Fields must be Filled.");
//   } else {
//     let addedListings = `
//     <tr>
//       <td> + listingID + </td>
//       <td> + listingName + </td>
//       <td> + listingType + </td>
//       <td> + listingCategory + </td>
//       <td> + listingImage + </td>
//       <td> + listingPrice + </td>
//       <td> + listingOwner + </td>
//       <td> + Edit + </td>
//       <td> + Delete + </td>`;
//   }
// }
