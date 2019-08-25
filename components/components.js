function TileListController(){
    this.metrics = [
        {
            "title" : "Orders",
            "data" : [
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
            ]
        },
        {
            "title": "Payments",
            "data": [
                {
                    quantity: 3,
                    icon: 'far fa-envelope-open',
                    description: 'Pending Requests',
                    destination: 'payments'
                }, {
                    quantity: 6,
                    icon: 'fas fa-inbox',
                    description: 'Payments Received',
                    destination: 'payments',
                }, {
                    quantity: 4,
                    icon: 'far fa-calendar-check',
                    description: 'Payments Made',
                    destination: 'payments',
                }
            ]
        },
        {
            "title": "Trouble Tickets",
            "data": [
                {
                    quantity: 9,
                    icon: 'fas fa-ticket-alt',
                    description: 'New Tickets',
                    destination: 'tickets'
                }, {
                    quantity: 5,
                    icon: 'fas fa-clock',
                    description: 'Pending Tickets',
                    destination: 'tickets',
                }, {
                    quantity: 12,
                    icon: 'fas fa-clipboard',
                    description: 'Tickets Closed',
                    destination: 'tickets',
                }
            ]
        }
    ];
}

function OrderListController(){
    this.orders = [
        {
            "order_no" : 1446860,
            "vendor": "PGT",
            "total": 1470.00
        }, {
            "order_no" : 1446911,
            "vendor": "VROOM",
            "total": 3241.00
        }, {
            "order_no" : 1406777,
            "vendor": "PGT",
            "total": 6653.00
        }, {
            "order_no" : 1436987,
            "vendor": "All American Windows",
            "total": 9678.00
        }, {
            "order_no" : 1428565,
            "vendor": "AAW",
            "total": 4537.00
        }, {
            "order_no" : 1425885,
            "vendor": "Florida Aluminum Products",
            "total": 1437.00
        }, {
            "order_no" : 1409867,
            "vendor": "VROOM",
            "total": 9875.00
        }, {
            "order_no" : 1423468,
            "vendor": "PGT",
            "total": 3457.00
        }, {
            "order_no" : 1498756,
            "vendor": "VROOM",
            "total": 6783.00
        }, {
            "order_no" : 1490763,
            "vendor": "Pacific Gulf Trade",
            "total": 3434.00
        }
    ];
}
function OrderDetailsController(){
    this.order = {
        "order_name": "PAG-G2175 Grids",
        "org_name": "Palm Aluminum and Glass Inc",
        "amount": 1355.00,
        "close_date": "05/28/2019",
        "sales_stage": "Received",
        "vendor": "PGT",
        "order_number": 1446860,
        "eta": "05/28/2019",
        "date_received": "05/29/2019",
        "total": 1470.00,
        "notes": "BACK ORDERED: LINE 1 QTY 1 SGD770PARTS - RECEIVED 06.26.19"
    };
}
function ProfileController(){
    this.profile_details = {
        "firstname": "Chuck",
        "lastname": "Okere",
        "email1": "cokere@boruapps.com",
        "phone1": "+1 (773) 307-2548",
        "account_id": "Boru Inc.",
        "theme": "Dark"
    }
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