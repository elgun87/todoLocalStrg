var todosObject = {

    todoList: [],

    addTodo: function(value){
        var my_todo = {
            todo: value,
            status: 'active',
        };
        if(document.getElementById('input').value !== ''){
            this.todoList.push(my_todo);
        }
        // this.todoList.push(my_todo);
    },

    checkStatus: function(i){
        if(this.todoList[i].status === 'active'){
            this.todoList[i].status = 'completed';
        }else{
            this.todoList[i].status = 'active';
        }
    },

    printTodo: function(){
     
        document.getElementById('main').innerHTML = '';
        for(let i = 0;i < this.todoList.length;i ++){
            let div = document.createElement('div');
            div.append(document.createTextNode(this.todoList[i].todo));
            div.dataset['todo'] = i;
            div.style.fontSize = "30px";
            div.addEventListener('click', function(){
                div.classList.remove(todosObject.todoList[i].status);
                div.classList.remove(todosObject.todoList[i].status);
                todosObject.checkStatus(i);
                div.classList.add(todosObject.todoList[i].status);
                // console.log(todosObject.todoList);
            });
            document.getElementById('main').append(div);
        };
        console.log('print todo click olundu')
    },

    getInitData: function(){
        // let arr = [];
        let new_arr = window.localStorage.getItem('value');
    
        if(new_arr !== null){
            this.todoList = JSON.parse(new_arr);
        };
        return this.todoList;
    },

    printInitData: function(){
        let array = this.getInitData();
        this.printTodo(array);


        // for(let i = 0;i < array.length;i ++){
        //     $('#main').append(`<div>${array[i].todo}</div>`)
        //     console.log(array[i]);
        // };
    },

    addDataToLocalStrg: function(){
        if(document.getElementById('input').value === ''){
            return false;
        }else{
            window.localStorage.setItem('value',JSON.stringify(todosObject.todoList));
        }
    },
    checkIfLocalEmpty: function(){
        let new_arr = window.localStorage.getItem('value');
        if(new_arr === null){
            document.getElementById('main').innerHTML += '';
        };
    }

};



$('#add').on('click', function(){
    todosObject.checkIfLocalEmpty();

    let value = document.getElementById('input').value;

    // document.getElementById('input').value = '';
    todosObject.addTodo(value);
    todosObject.printTodo();
    todosObject.addDataToLocalStrg();
    document.getElementById('input').value = '';
    console.log(todosObject.todoList);
    // todosObject.checkIfLocalEmpty();
    // console.log(todosObject.todoList);
    // window.localStorage.setItem('value',JSON.stringify(todosObject.todoList));
});

$('#clear').on('click', function(){
    let makeSure = confirm('All todos will be deleted.Are your sure???');
    if(makeSure){
        document.getElementById('main').innerHTML = '';
        todosObject.todoList = [];
        window.localStorage.clear();
    }
    // document.getElementById('main').innerHTML = '';
    // todosObject.todoList = [];
    // window.localStorage.clear();
})


// function getInitialData(){
//     let arr = [];
//     let new_arr = window.localStorage.getItem('value');

//     if(new_arr !== null){
//         arr = JSON.parse(new_arr);
//     };
//     return arr;
// };

// let array = getInitialData();

// function printInitData(){
//     for(let i = 0;i < array.length;i ++){
//         $('#main').append(`<div>${array[i].todo}</div>`)
//         console.log(array[i]);
//     };
// };
todosObject.printInitData();
// printInitData();


// window.localStorage.clear();