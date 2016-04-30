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
									upvotes:0,
									comments:[ //fake comments for testing
									{author:'Vinil',cbody:'Cool Post',upvotes:0},
									{author:'Valindo',cbody:'wow!superb Post',upvotes:0}
									]
								}
									);
				$scope.title = '';
				$scope.link = '';
			}
		}
		//voting posts
		$scope.incVotes= function(post){
			post.upvotes += 1;
		}	
	}

	]);

app.controller('PostCtrl',[
	'$scope',
	'posts',
	'$stateParams',
	function($scope,$stateParams,posts){
		//sending params id 
		 $scope.post = posts.post[$stateParams.id];
		// $stateParams.id;

		//add comment
		$scope.addComment = function(){
			if($scope.cbody==''){return;}
			$scope.posts.comments.push({
				author:'user', //hardcoded temperorily 
				cbody:$scope.cbody,
				upvotes:0
			});
			$scope.cbody='';
		}

		$scope.incVotes= function(comment){
			post.comments.upvotes += 1;
		}	
	}
	]);

app.factory('posts',[function(){
	// object that saves post (later to be exported in db)
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
			})

			.state('posts',{
				url:'/posts/{id}',
				templateUrl:'/posts.html',
				controller:'PostCtrl'
			})
		$urlRouterProvider
			.otherwise('home');
	}]);
