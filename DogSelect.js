//OnEvent to choose whether user wants to adopt a dog
onEvent("yesButton", "click", function( ) {
setScreen("screen3");
  });
onEvent("noButton", "click", function( ) {
setScreen("screen2");
  });
onEvent("homescreenButton", "click", function( ) {
setScreen("screen1");
  });
//OnEvents for which dog size user chooses
onEvent("smallButton", "click", function( ) {
  setScreen("screen4");
  userDogSize = 0;
  updateScreenWithDogChoice();
});
onEvent("medButton", "click", function( ) {
  setScreen("screen4");
  userDogSize = 1;
  updateScreenWithDogChoice();
});
onEvent("largeButton", "click", function( ) {
  setScreen("screen4");
  userDogSize = 2;
  updateScreenWithDogChoice();
});
//OnEvent once user gets dog to decide to pick another dog or choose the dog they have
onEvent("diffDog","click", function ( ){
  setScreen("screen3");
});
onEvent("finish","click", function ( ){
  setScreen("screen5");
});
onEvent("backtoHome","click", function ( ){
  setScreen("screen1");
});

//Variables for data
var bredFor = getColumn("Dogs", "Bred For");
var maxLife = getColumn("Dogs", "Maximum Life Span");
var minLife = getColumn("Dogs", "Minimum Life Span");
var dogName = getColumn("Dogs", "Name");
var breedGroup = getColumn("Dogs", "Breed Group");
var icon = getColumn("Dogs", "Image");
var userDogSize = 0;
var dogSizeList = getColumn("Dogs", "Maximum Weight");
// 0 means Small, 1 means Medium and 2 means Large

//Filtered Lists
var bredForList = [];
var nameList = [];
var minAgeList = [];
var maxAgeList = [];
var breedGrpList = [];
var dogIcnList = [];


//Function to update the screen with information on dogs based off size that user chooses
//Function will traverse through the lists and append items based off of weight
//If statements will organize dogs based off of weight
function updateScreenWithDogChoice() {
  // max wt of 0 - 66 small
  // max wt 67 - 132 medium
  // max wt of 133 - 200 large
   var wt1, wt2 =0;
  
   if (userDogSize == 0) {
    wt1 = 0;
    wt2 = 66;
  }
  if (userDogSize == 1) {
    wt1 = 67;
    wt2 = 132;
  }
  if (userDogSize == 2) {
    wt1 = 133;
    wt2 = 200;
  }
  
  for (var i = 0; i < dogSizeList.length; i++) {
   if ((dogSizeList[i] >= wt1) && (dogSizeList[i] <= wt2)) {
     appendItem(bredForList, bredFor[i]);
     appendItem(nameList, dogName[i]);
     appendItem(minAgeList, minLife[i]);
     appendItem(maxAgeList, maxLife[i]);
     appendItem(breedGrpList, breedGroup[i]);
     appendItem(dogIcnList, icon[i]);
   }
  }
  updateScreen();
}
//Function to update info from dataset to the category areas
//Random number generator to giive user random dog everytime they click the button
function updateScreen() {
  
  var index= randomNumber(0, nameList.length - 1);
  setText("bredFor", "Bred For: " + bredForList[index]);
  setText("minmaxLife","Min-Max Life: " + minAgeList[index] + "-" + maxAgeList[index]);
  setText("dogName", "Dog Name: " + nameList[index]);
  setText("breedGroup", "Bred For: " + breedGrpList[index]);
  setProperty("iconSpace", "image", dogIcnList[index]);
}
