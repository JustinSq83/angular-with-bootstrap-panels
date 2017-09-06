# DME Denial Guide
*An efficient application utilizing AngularJS and Bootstrap Panels. All data is fetched from a MySQL database using PHP.  All routing is handled via UI-Router.*

### **Please visit www.dmedenialguide.com to see the application in action.**

A relatively simple AngularJS application can be very effective, and also aesthetically pleasing when Bootstrap is used for styling.  It can also be highly efficient when used in conjunction with a MySQL database and PHP.  This application allows for multiple headings to be searched and filtered through a search box.  The data is then displayed using a Bootstrap component called Panels.  There is a section for a heading and another section for a body.

DME Denial Guide is designed to assist in appealing and resubmitting durable medical equipment (DME) claims that have been denied by Medicare.  The headings are denial codes used by Medicare.  They can be searched and filtered through the search box.  The first section of the panel is the denial code explanation, it is the definition of the denial that is used by Medicare.  The second section of the panel is the action to take to get the claim paid.  Some claims need to be appealed, and some claims can be corrected and resubmitted for payment.

**The text below offers a description of some core AngularJS concepts.  Please follow the hyperlinks to different files of this application.  They will show the coding within each file that corresponds to the concepts being described.  Specific lines of code to pay attention to will be referenced in parentheses after the hyperlink.**

AngularJS is a front-end web application framework used to develop single page applications.  It is designed using a model-view-controller for user interaction.  The model is responsible for maintaining data.  In this case the data comes from a [MySQL database using PHP](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/php/denial.php) (see line 4).  The view then displays the data to the user.  This would be the [denial code, explanation, and action](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/partials/codes.html) (see lines 5, 8, and 9) that the user sees on their screen.  The model and view communicate with each other via data binding.  The view can be thought of as a projection of the model.  When data in the model is changed, it is reflected in the view.  Likewise when the user manipulates the data in the view, the model is updated.  When a user searches for a specific denial code, the view and the model are in sync.

AngularJS uses a method called dependency injection to pass an object to a function.  This means that objects do not need to be created inside a function, and [dependencies are simply “injected” into the function](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see lines 72 and 73).  With that said, AngularJS controllers are a function that define the data in an application.  Controllers manage the interactions between the model and the view.  An [object called $scope](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see lines 74, 75, and 76) is passed into the controller function and bound into the view via dependency injection.  The $scope (the “$” is a prefix used to identify an AngularJS predefined service) is then given a property called “codes.”  In this case it is an [array of all the denial codes in the application](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/partials/codes.html) (see line 3).  As the user types in the denial code, the data is filtered down.  The $scope is what holds the view and model together and keeps them in sync.  This is one of the most vital features of AngularJS.

Routes are what direct the view to different sections of a single page application without reloading the entire application.  Only part of the shell page changes in each view, and only the part that changes is loaded.  This application utilizes a framework called UI-Router.  Routing usually starts with a [configuration file](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see line 2).  Within this file there are two dependencies, the $urlRouterProvider and $stateProvider.  The $urlRouterProvider redirects from one URL to another, and the [$stateProvider creates a new application state](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see lines 4 through 31).  These dependencies change the [application view](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/partials/navigation.html) (see lines 12, 23, 24, and 25) based on the state of the application, not just the route URL.

Factories in AngularJS are used to fetch data.  They essentially create and return an object that can be used to work with data.  This allows the controller to be solely used for data binding using $scope. This separates duties within the application and makes it more manageable.  Likewise, [another AngularJS service called $http](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see line 80) is injected (dependency injection) into the factory.  This service makes a request to a server and returns a response.  In turn this response is [passed through a function](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see lines 81 through 85) that has a data property.  The data retrieved is then [assigned to the "codes" property on the $scope object](https://github.com/JustinSq83/angularjs-with-bootstrap-panels/blob/master/app/js/app.js) (see line 74), making it available in the view.

This only scratches the surface on how AngularJS is utilized within this application.  However the model-view-controller design pattern and data binding are at the core of any AngularJS application.  Dependency injection is also used extensively across the entire AngularJS framework.  Separating tasks and making them dependant of one another makes the application more manageable, and makes the code reusable with different applications.

### **Please visit www.dmedenialguide.com to see the application in action.**


