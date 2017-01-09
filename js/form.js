var app=angular.module("myApp",[])
app.controller('myCtrl',function($scope){
var lastEditTr=-1;
$scope.people=[];
var person;
$scope.display= function(){
	person= {
	name: $scope.name,
	email: $scope.email,
	phoneno: $scope.phoneno,
};
 $scope.people.push(person);
}
$scope.delete= function(index){
	$scope.people.splice(index,1)
}
$scope.edit= function(index){
	$scope.name= $scope.people[index].name;
	$scope.email=$scope.people[index].email;
	$scope.phoneno=$scope.people[index].phoneno;
	console.log(index);
	lastEditTr=index;
}
$scope.update= function(){
	$scope.people[lastEditTr].name=$scope.name;
	$scope.people[lastEditTr].email=$scope.email;
	$scope.people[lastEditTr].phoneno=$scope.phoneno;
}

$scope.reset=function(){
	$scope.name="";
	$scope.email="";
	$scope.phoneno="";
}

});