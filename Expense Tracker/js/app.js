angular
  .module('angularExpenseApp', [
  ])
  .controller('expenseController', function ($scope) {
    $scope.friends= ["Sandy","Andy","Mandy","Xandy"];
    $scope.currencies = [
      {name:"USD",exc_rate:"60.0"},
      {name:"INR",exc_rate:"1"},
      {name:"EUR",exc_rate:"70.0"}
    ];
    $scope.f_name = '';
    $scope.toggle = false;
    $scope.expense = '';
    $scope.expenses = [];
    $scope.filtr = { };
    $scope.currencyfiltr = { };
    $scope.buttonText = "Add Expense!";
    $scope.addHeader = "Add a new Expense >"
    // $scope.flag = '';
    $scope.setCurrency = function(name){
      var _cname = name;
      // $scope.flag = "it is running";
      $scope.expenses.forEach(function(key){
            $scope.fla = key;
            if (_cname == "INR") {
              if (key.currency == "EUR") {
                      key.amount = key.amount * 70.0;
                      key.currency = "INR";
              }
              else if (key.currency == "USD"){
                      key.amount = key.amount * 60.0;
                      key.currency = "INR";
              }
            }
            else if (_cname == "EUR") {
              if (key.currency == "INR") {
                  key.amount = key.amount / 70.0;  
                  key.currency = "EUR";
              }
              else if(key.currency == "USD"){
                  key.amount = (key.amount /70)*60;
                  key.currency = "EUR";
              }
            }
            else{
              if (key.currency == "INR") {
                  key.amount = key.amount / 60.0;
                  key.currency = "USD";
              }
              else if (key.currency == "EUR"){
                  key.amount = (key.amount / 60.0)*70.0
                  key.currency = "USD";
              }
            }
            });
          };
    $scope.addExpense = function (expense) {
      if (Object.keys(expense).length > 1){
        $scope.expenses.push(expense);
        $scope.expense = '';
        $scope.expform.$setPristine();
        $scope.expform.$setUntouched();
        //set the status of the whole form to pristine and untouched, or in other words to 'new'.
        $scope.buttonText = "Add Expense!";
      }
    };
    $scope.addFriend = function(fName){
      if(fName){
        $scope.friends.push(fName);
        $scope.f_name = '';
      };
      $scope.toggle = !($scope.toggle)
    };
    $scope.deleteExpense = function(id){
        if (id > -1) {
          $scope.expenses.splice(id,1);
        }
    };
    $scope.editExpense = function(id){
      $scope.expense = $scope.expenses[id];
      $scope.buttonText = "Done Editing!";
      $scope.addHeader = "Edit the entry!";
    };
  });
