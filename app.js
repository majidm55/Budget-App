
//BUDGET CONTROLLER
var budgetController = (function() {
 // some code

    
})();

// UI CONTROLLER
var UIcontroller = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    }
    return {
        getInput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp  
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };      
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UIctrl) {
    
    var DOM = UIctrl.getDOMstrings();

    var ctrlAddItem = function() {
        // 1. Get field input data
        var input = UIcontroller.getInput();
        console.log('input', input);
        // 2. Add item to the budget controller
        //3.  Add Item to UI
        //4.  Calculate the budget
        //5. Display the budget on the UI 
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIcontroller);



