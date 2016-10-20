module.exports = function($scope) {

    //$scope.totalTodos = 4;

    $scope.todoList = [{
        text: 'Learn Javascript',
        done: true
    }, {
        text: 'Learn Angular',
        done: false
    }];

    $scope.getTotalTodos = function() {
        return $scope.todoList.length;
    };

    $scope.addTodo = function() {

        if ($scope.formTodoText.length === 0) {
            return;
        }

        $scope.todoList.push({
            text: $scope.formTodoText,
            done: false
        });

        $scope.formTodoText = '';
    };

    $scope.clearTodos = function() {
        $scope.todoList = $scope.todoList.filter(function(value) {
            return !value.done;
        });
    };

};
