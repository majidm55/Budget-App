var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();


var UIcontroller = (function() {
 // some code

})();

var controller = (function(budgetCtrl, UIctrl) {

    var z = budgetController.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIcontroller);