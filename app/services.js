myApp
	.constant("baseURL","http://localhost:3000/")
	.service('property',['$resource','baseURL', function($resource,baseURL){
		
		return $resource(baseURL+"property/:id",null,{'update':{method:'PUT'}});
	}])

	