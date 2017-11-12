const app = angular.module('todoApp', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
    $scope.getTodos = function () {
        console.log('getTodos');
        $scope.incompleteTodos = [];
        $scope.completeTodos = [];
        $http.get('/todos').then(function (res) {
            console.log(res);
            res.data.map(function (item) {
                if(!item.completed){
                    $scope.incompleteTodos.push(item);
                } else {
                    $scope.completeTodos.push(item);
                }
            })
        })
    };
    $scope.getTodos();

    $scope.submitTodo = function () {
        $http.post('/todos', { title: $scope.newTodo })
            .then( () => $scope.getTodos() );
    };

    $scope.completeTodo = function (todo) {
        console.log(todo);
        $http.put(`/todos/${todo.id}`, { completed: true })
            .then(() => $scope.getTodos());
    };

    $scope.removeTodo = function (todo) {
        console.log(todo);
        $http.delete(`/todos/${todo.id}`)
            .then(() => $scope.getTodos());
    }

}]);
