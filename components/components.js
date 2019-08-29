function TileListController(){
    this.metrics = [
        {
            "title" : "Orders",
            "data" : [
                {
                    quantity: 6,
                    icon: 'far fa-hourglass',
                    description: 'Orders Pending',
                    destination: 'orders',
                },
                {
                    quantity: 8,
                    icon: 'fas fa-route',
                    description: 'Orders In Process',
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
                    quantity: 1,
                    icon: 'fas fa-times',
                    description: 'Orders Cancelled',
                    destination: 'orders',
                }
            ]
        },
        {
            "title": "Payments",
            "data": [
                {
                    quantity: 3,
                    icon: 'fas fa-inbox',
                    description: 'Pending Invoices',
                    destination: 'payments'
                }, {
                    quantity: 2,
                    icon: 'far fa-envelope-open',
                    description: 'Payments Past Due',
                    destination: 'payments',
                },
                {
                    quantity: 6,
                    icon: 'far fa-calendar-check',
                    description: 'Last 30 Days',
                    destination: 'payments',
                },
                {
                    quantity: 10,
                    icon: 'fas fa-vote-yea',
                    description: 'Payments Made',
                    destination: 'payments',
                }
            ]
        },
        {
            "title": "Service Tickets",
            "data": [
                {
                    quantity: 5,
                    icon: 'fas fa-clock',
                    description: 'Need Your Attention',
                    destination: 'tickets',
                }, {
                    quantity: 1,
                    icon: 'fas fa-ticket-alt',
                    description: 'New Tickets',
                    destination: 'tickets'
                }, {
                    quantity: 12,
                    icon: 'fas fa-clipboard',
                    description: 'Closed Tickets',
                    destination: 'tickets',
                }
            ]
        }
    ];
}

function OrderListController(order = ''){
    this.orders = [
        {
            "order_no" : 1446860,
            "vendor": "PGT",
            "subtotal": 1337.00,
            "total": 1470.00
        }, {
            "order_no" : 1446911,
            "vendor": "VROOM",
            "subtotal": 3189.37,
            "total": 3241.00
        }, {
            "order_no" : 1406777,
            "vendor": "PGT",
            "subtotal": 6244.54,
            "total": 6653.00
        }, {
            "order_no" : 1436987,
            "vendor": "All American Windows",
            "subtotal": 8989.73,
            "total": 9678.00
        }, {
            "order_no" : 1428565,
            "vendor": "AAW",
            "subtotal": 3875.00,
            "total": 4537.00
        }, {
            "order_no" : 1425885,
            "vendor": "Florida Aluminum Products",
            "subtotal": 1211.60,
            "total": 1437.00
        }, {
            "order_no" : 1409867,
            "vendor": "VROOM",
            "subtotal": 7689.63,
            "total": 9875.00
        }, {
            "order_no" : 1423468,
            "vendor": "PGT",
            "subtotal": 2988.00,
            "total": 3457.00
        }, {
            "order_no" : 1498756,
            "vendor": "VROOM",
            "subtotal": 5675.00,
            "total": 6783.00
        }, {
            "order_no" : 1490763,
            "vendor": "Pacific Gulf Trade",
            "subtotal": 2855.00,
            "total": 3434.00
        }
    ];
    //Attempt at getting order details 
    this.getOrder = function(order){
        var result = this.orders.filter(orderVal => {
            return orderVal.order_no == order;
        })
        return result;
    }
    //Attempt at getting order details 
}

var orderlistdetail = new OrderListController;

function OrderDetailsController($routeParams){
    //Attempt at getting order details 
    var ord = orderlistdetail.getOrder($routeParams.order);
    var order_info = ord[0];
    //Attempt at getting order details 
    this.order = {
        "order_name": "PAG-G2175 Grids",
        "org_name": "Palm Aluminum and Glass Inc",
        "amount": order_info.subtotal,
        "close_date": "05/28/2019",
        "sales_stage": "Received",
        "vendor": order_info.vendor,
        "order_number": order_info.order_no,
        "eta": "05/28/2019",
        "date_received": "05/29/2019",
        "total": order_info.total,
        "notes": "BACK ORDERED: LINE 1 QTY 1 SGD770PARTS - RECEIVED 06.26.19"
    };
}
function ProfileController(){
    this.profile_details = {
        "firstname": "Chuck",
        "lastname": "Okere",
        "email1": "cokere@boruapps.com",
        "phone1": "+1 (773) 307-2548",
        "account_id": "Boru, Inc.",
        "theme": "Dark"
    }
}

function SpinnerController(){
    this.loading = false;
}

newApp.component('tileMetrics', {
    templateUrl: 'components/tile-metrics.html',
    controller: TileListController,
});
newApp.component('orderList', {
    templateUrl: 'components/order-list.html',
    controller: OrderListController,
});
newApp.component('orderDetails', {
    templateUrl: 'components/order-details.html',
    controller: OrderDetailsController,
});
newApp.component('profile', {
    templateUrl: 'components/profile.html',
    controller: ProfileController,
});
newApp.component('loadingSpinner', {
    templateUrl: 'components/loading-spinner.html',
    controller: SpinnerController,
})