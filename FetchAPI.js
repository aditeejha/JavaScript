//Json website to use API
async function getData(){
    //get request-async
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //parse json-> async
    let data=await response.json();
    console.log(response);
}
getData();// data aaye bina execute aa jaega to o/p aa nahi paega aise direct call se
//scenario:
//prepare url /api endpoint -> sync code, say
//fetch data->network call -> async
//process data-> sync

//jab tak data network call se na aaye, tab tak use process na karun-> use await to stop flow of execution at that 
