function TileListController(){
    this.metrics = [
        {
            quantity: 8,
            icon: 'fas fa-route',
            description: 'Orders In Transit',
            destination: 'orders'
        }, {
            quantity: 12,
            icon: 'fas fa-cart-arrow-down',
            description: 'Orders Received',
            destination: 'orders',
        }, {
            quantity: 4,
            icon: 'far fa-check-square',
            description: 'Orders Completed',
            destination: 'orders',
        }, {
            quantity: 6,
            icon: 'far fa-hourglass',
            description: 'Orders Pending',
            destination: 'orders',
        }, {
            quantity: 1,
            icon: 'fas fa-times',
            description: 'Orders Cancelled',
            destination: 'orders',
        }
    ];
}

newApp.component('tileMetrics', {
            templateUrl: 'components/tile-metrics.html',
            controller: TileListController,
    });
    


/*
angular.module('components', [])
  .directive('tile-header', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
		var tiles = $scope.tiles = [];
		this.addTile = function(tile){
			if(tiles.length==0) $scope.select(tile);
			tiles.push(tile);
		}
	},
      template:
		'<div class="row">' +
			'<div class="heading-dark col-12">' +
				'<h4>{{title}}</h4>' +
			'</div>' +
		'</div>',
      replace: true
    };
  })
    .directive('tile-carousel', function(){ 
        return{
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element){

            },
            template: 
                '<div class="row tile-carousel">' +
                    '{{tiles}}' +
                '</div>',
            replace: true
        };
    })  
    .directive('tileMetrics', function(){
        return{
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function getMetrics(){
                this.metrics = [
                    {
                        quantity: 8,
                        icon: 'fas fa-route',
                        description: 'Orders In Transit',
                        destination: 'orders'
                    }, {
                        quantity: 12,
                        icon: 'fas fa-cart-arrow-down',
                        description: 'Orders Received',
                        destination: 'orders',
                    }, {
                        quantity: 4,
                        icon: 'far fa-check-square',
                        description: 'Orders Completed',
                        destination: 'orders',
                    }, {
                        quantity: 6,
                        icon: 'far fa-hourglass',
                        description: 'Orders Pending',
                        destination: 'orders',
                    }, {
                        quantity: 1,
                        icon: 'fas fa-times',
                        description: 'Orders Cancelled',
                        destination: 'orders',
                    }
                ];
            },
            template:
                '<div class="tile col-6" ng-repeat="metric in $ctrl.metrics">' +
                    '<a href=".#!/{{metric.destination}}">' +
                    '<h1 class="digit g-text text-center">{{metric.quantity}}</h1>' +
                        '<div class="container">' +
                            '<div class="row">' +
                                '<div class="col-4">' +
                                    '<i class="{{metric.icon}} fa-2x icon g-text"></i>' +
                                '</div>' +
                                '<div class="col-8">' +
                                    '<p class="small-text white-text"> {{metric.description}}</p>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</a>' +
                '</div>',
                replace: true
        };
    });
	
 */
