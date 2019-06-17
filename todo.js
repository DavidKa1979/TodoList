app.controller("TodoCtrl", function ($scope) {

  $scope.taskList = [{
      done: true,
      task: 'Do nothing'
    },
    {
      done: false,
      task: 'Learn AngularJS'
    },
    {
      done: false,
      task: 'Build an app'
    },
    {
      done: false,
      task: 'Show some tasks'
    },
    {
      done: false,
      task: 'Add a task'
    },
    {
      done: false,
      task: 'Walk the dog'
    }
  ];

  $scope.getTotal = function () {
    return $scope.taskList.length;
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.taskList, function(task) {
      count += task.done ? 0 : 1;
    });
    return count;
  };

  $scope.itemText = function() {
    return ($scope.taskList.length - $scope.remaining() > 1) ? "items" : "item";     
};

  //Function for adding task to the task list
  $scope.addTask = function (task) {
    //I'm pushing a new task to the task list
    $scope.taskList.push({
      done: false,
      task: task
    });
    $scope.newTask = "";
  };


  $scope.deleteCompleted = function (){   
    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function (task) {
      if (!task.done) $scope.taskList.push(task);
    });
  };

  $scope.deleteinCompleted = function () {
    var r = confirm("Caution: You are about to delete an incomplete task");
    if (r==true){
    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function (task) {
      if (task.done) $scope.taskList.push(task);
    })
  } else {
    return alert("You pressed Cancel!");
    };
  };


  $scope.deleteAll = function () {
    $scope.taskList = [];
    angular.forEach(taskList, function (task) {
      delete $scope.taskList;
    })
  };
    
   


  $scope.all = function () {
    $scope.filterInput = 'all'
  }

  $scope.completed = function () {
    $scope.filterInput = 'complete';
  }

  $scope.clear = function () {
    $scope.filterInput = 'clear'
  }


  $scope.onSelect = function (task) {
    for (var i = $scope.taskList.length - 1; i >= 0; i--) {
      if ($scope.taskList[i] === task) {
        $scope.taskList.splice(i, 1);
      }
    }
  }

  $scope.filterTodo = function (task) {
    if ($scope.filterInput == 'complete') {
      if (task.done) {
        return true;
      } else {
        return false;
      }
    } else if ($scope.filterInput == 'clear') {
      if (task.done) {
        return false;
      } else {
        return true;
      }

    } else if ($scope.filterInput == 'all') {
      return true;
    }

    return true;
  }


});