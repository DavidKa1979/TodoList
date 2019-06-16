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
 
  //Function for adding task to the task list
  $scope.addTask = function (task) {
    //I'm pushing a new task to the task list
    $scope.taskList.push({
      done: false,
      task: task
    });
    $scope.newTask = "";
  };

  $scope.clear = function() {
    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function(task) {
        if (!task.done) $scope.taskList.push(task);
    });
};

$scope.completed = function() {
  var oldList = $scope.taskList;
  $scope.taskList = [];
  angular.forEach(oldList, function(task) {
      if (task.done) $scope.taskList.push(task);
  });
};


$scope.onSelect = function(task) {
  if ($scope.selected === task) {
    $scope.selected = null;
  } else {
    $scope.selected = task;

  }
}

$scope.filterTodo = function(task) {
  if ($scope.filterInput == 'complete' ) {
    if (task.done) {
      return true;
    } else {
      return false;
    }
  } else if ($scope.filterInput=='clear') {
    if (task.done) {
      return false;
    } else {
      return true;
    }

  }else { 
    return true;
  }
}


});