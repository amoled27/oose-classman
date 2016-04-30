var app = angular.module('classApp',['ui.router']);

app.controller('classController',[
	'$scope',
	'posts',
	function($scope,posts){
		$scope.posts = posts.posts;


		$scope.addPost= function(){
			if(!$scope.title){return};
			if($scope.title!=''){
				$scope.posts.push({title:$scope.title,
									link:$scope.link,
									upvotes:0
									// comments:[
									// {author:'Vinil',body:'Cool Post',upvotes:0},
									// {author:'Adi',body:'wow!superb Post',upvotes:0}
									// ]
								}
									);
				$scope.title = '';
				$scope.link = '';
			}
		}

		$scope.incVotes= function(post){
			post.upvotes += 1;
		}	
	}

	]);

// app.controller('PostCtrl',[
// 	'$scope',
// 	'posts',
// 	'$stateParams',
// 	function($scope,posts){
// 		// $scope.posts = posts.posts[$stateParams.id];
// 	}
// 	]);

app.factory('posts',[function(){
	var o ={
		posts: []
	};
	return o;
}]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){

		$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'/home.html',
				controller:'classController'
			});

			// .state('posts',{
			// 	url:'/posts/{id}',
			// 	templateUrl:'/posts.html',
			// 	controller:'PostCtrl'
			// })
		$urlRouterProvider
			.otherwise('home');
	}]);
