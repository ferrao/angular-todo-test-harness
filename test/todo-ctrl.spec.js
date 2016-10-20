// test controller

describe('Todo Controller', function() {

    var todoCtrl, scope;

    beforeEach(function() {

        angular.mock.module('todoApp');
        angular.mock.inject(function($controller, $rootScope) {

            scope = $rootScope.$new();

            todoCtrl = $controller('TodoCtrl', {
                $scope: scope
            });

        });
    });

    it('should have some todos initially', function() {

        expect(scope.getTotalTodos()).toEqual(2);

    });

});
