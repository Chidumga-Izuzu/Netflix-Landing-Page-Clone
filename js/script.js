var Item = document.getElementsByClassName("accordionItem");
var Heading = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < Heading.length; i++) {
  Heading[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < Item.length; i++) {
    Item[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
