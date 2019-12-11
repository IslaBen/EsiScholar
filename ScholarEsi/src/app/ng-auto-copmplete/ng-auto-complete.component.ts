import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ng-auto-complete',
  templateUrl: './ng-auto-complete.component.html',
  styleUrls: ['./ng-auto-complete.component.css']
})
export class NgAutoCompleteComponent implements OnInit, OnChanges {
  constructor() { }

  ngOnInit() {
    this.autocomplete(document.getElementById("myInput"), this);
  }
  ngOnChanges(changes: any) {
    if (changes['autoCompleteData']) {
      let x = document.getElementsByClassName("autocomplete-items")[0];
      if (x) x.parentNode.removeChild(x);
      (<HTMLInputElement>document.getElementById("myInput")).value = "";
    }
  }

  @Input() autoCompleteData: any;
  @Output() searchInputChange = new EventEmitter();

  inputValue : string;

  autocomplete(inp, that) {
    let currentFocus = 0;
    inp.removeEventListener("input", function () {
    });
    inp.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeList();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("div");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < that.autoCompleteData.length; i++) {
        if (that.autoCompleteData[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("div");
          b.innerHTML = "<strong>" + that.autoCompleteData[i].substr(0, val.length) + "</strong>";
          b.innerHTML += that.autoCompleteData[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + that.autoCompleteData[i] + "'>";
          b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeList();
          });
          a.appendChild(b);
        }
      }
    });

    inp.addEventListener("keydown", function(e) {
      let x = document.getElementById("myInputautocomplete-list");
      if (x) {
        if (e.keyCode == 40) { // keyDown pressed
          currentFocus++;
          addActive();
        } else if (e.keyCode == 38) { // keyUp pressed
          currentFocus--;
          addActive();
        } else if (e.keyCode == 13) { // Enter pressed
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) (<HTMLElement>x.children[currentFocus]).click();
          }
        }
      }
    });

    function addActive() {
      let x = document.getElementById("myInputautocomplete-list");
      /*a function to classify an item as "active":*/
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.children.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.children.length-1;
      x.children[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (let i = 0; i < x.children.length; i++) {
        x.children[i].classList.remove("autocomplete-active");
      }
    }
    function closeList() {
      let x = document.getElementsByClassName("autocomplete-items")[0];
      if (x) x.parentNode.removeChild(x);
    }
    /*execute a function when someone clicks in the document:*/
    // document.addEventListener("click", function (e) {
    //   closeList(e.target);
    // });
  }

  inputChanged() {
    this.searchInputChange.emit(this.inputValue);
  }
}
