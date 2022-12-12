/* BUDGET CONTROLLER
 - function constructor for expense
 - function constructor for income
 -  setup our data obj
 - ability to calculate total
 - can add and delete Items
 - can caluclateBudget
 - can getBudget
 - cangetPercentages
*/  

let BudgetController = (function() {

  let Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }

  Expense.prototype.calcPercentage = function(totalIncome) {

  }

  Expense.prototype.getPercentage = function() {}

  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value
  }

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1
  }





  return {
    addItem: function(type, des, val) {
      // create new ID
      if(data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].legnth - 1].id + 1;
      } else {
        ID = 0
      }
      // create a new item based on exp or inc type
      if(type === 'exp') {
        newItem = new Expense(ID, desc, val)
      } else if(type === 'inc') {
        newItem = new Income(ID, desc, val)
    }
    // push the new intem into the data structure
    data.allItems[type].push(newItem)

    return newItem
  }
}

}) ();
  
/* UI CONTROLLER
 - Let's add our most commonly used CSS property into an object we can handle better
 - Will need to help format our numbers
 - will need to get listItems & deleteListItems
 - will need to clearFields
 - will need to displayBudget & displayPercentages & displayMonth
 - will need to determine if a type has changed
 --
 */
let UIController = (function() {

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add_description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses_list',
    budgetLabel: '.budget__value',
    incomeLabel: '.income__value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPerLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  }

  let formatNumber = function(num, type) {
    num = Math.abs(num)
    num = num.toFixed(2)

    let numSplit = num.split('.')
    let int = numSplit[0]

    if(int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3)
    }

    dec = numSplit[1]

    return (type = 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec
  }

  return {

    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will 'inc' or 'exp'
        description: document.querySelector(DOMstrings.inputDescription).value, // will be equal to whatever the user type in
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },
    addListItem: function(obj, type) {
      let html, newHtml, element

      if(type === 'inc') {
        element = DOMstrings.incomeContainer
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
      } else {
        element = DOMstrings.expensesContainer
        html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
      }

      newHtml = html.replace('%id%', obj.id)
      newHtml = html.replace('%description', obj.description)
      newHtml = html.replace('%value', formatNumber(obj.value, type));

      // insert the html into the dom
      document.querySelector(element).insertAdjacentHTML('beforened', newHtml)
    },
    deleteListItem: function(selectorID) {
      let el = document.getElementById(selectorID);
      el.parentNode.removeChild(el)
    },
    clearFields: function() {
      let fields, fieldsArr
      fields =  document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.array.forEach(function(current, index, array){
        current.value = "";
      });

      fieldsArr[0].focus();
    },
    changedType: function() {
      
    },
    getDOMStrings: function() {
      return DOMstrings
    }
  }

})();




  
/* APPLICATION CONTROLLER Will need to handle both the BudgetController && UIController
 - setup eventListeners
 - update our budget & percentages
 - ability to add & delte items
*/
let controller = (function(BudgetController, UIController) {


  let setupEventListeners = function() {
    let DOM = UIController.getDOMStrings();
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(e) {
      if(e.keycode === 13 || e.which === 13) {
        ctrlAddItem()
      }
    })

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', UIController.changedType)

  }

  let ctrlAddItem = function() {
    let input, newItem;

    input = UIController.getInput()

    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // add the item to our budgetController (budgetController)
      newItem = ''
      // addthe item to the ui (UIController)
      UIController.addListItem(newItem)
      // clear the fields (UIController)
      UIController.clearFields();
      // calculate the budge and update it (applicationController)
      // calcualte the percentage and update (applicationController)


    }


  }




  return {
    init: function() {
      console.log('Application has started')
      setupEventListeners();
    }
  };


})(BudgetController, UIController)



controller.init()