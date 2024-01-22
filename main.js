
let  income = parseInt(0);
let expense = parseInt(0);

document.getElementById('incomedisplay').innerHTML = income
document.getElementById('expencedisplay').innerHTML = income



function signup(){
    if(username.value == '' || email.value == '' || pswd.value == ''){
        alert(`Enter the information`)
    }else{
       if(username.value in localStorage){
        alert(`User already exist`)
       }else{
        user = {
            uname : username.value,
            email :  email.value,
            pswd : pswd.value,
            totalbal : 0,
            totalexp : 0
        }
        localStorage.setItem(user.uname,JSON.stringify(user))
        alert(`Registerd Sucessfully`)
        window.location = './login.html'
       }
    }
}
function login(){
    if(uname.value == '' || lpswd.value == ''){
        alert(`Enter the Username  and Password`)
    }else{
        if(uname.value in localStorage){
            let  user1 = JSON.parse(localStorage.getItem(uname.value))
        if(lpswd.value == user1.pswd){
            userid = user1.uname
            password = lpswd.value
            console.log(userid)
            console.log(password)
            userName = {
                uname : uname.value
            }
            localStorage.setItem("userN",JSON.stringify(userName))
            alert('Login Sucessfully')
            window.location ='home.html'
        }else{
            alert(`incorect password`)
        }
        }else{
            alert(`you are not registerd`)
        }
    }
}

function logout(){
    window.location = './login.html'
}


function addincome(){

    if(incometype.value == '' || incomeamount.value == ''){
        alert('Enter all inputs')
    }else{
            
            if(incomeamount.value <=0){
                alert('value be cannot empty')
            }else{
                income += parseInt(incomeamount.value)
                console.log(income)
                alert('Income Added Successfully')

                const now = new Date();
                let day = now.getDate();
                let month = now.getMonth() +1;
                let year = now.getFullYear();
            

                // Display the date
                 date = (`${month}/${day}/${year}`)

                document.getElementById('incomedisplay').innerHTML = income
                document.getElementById('tableincomedisplay').innerHTML +=`
                        <tr>
                           <td><h5>${incometype.value}</h5></td>
                           <td><h5>${incomeamount.value}</h5></td>
                           <td><h5>${income}</h5></td>
                           <td><h5>${date}</h5></td>
                          </tr>
                `
                incometype.value = '' ;
                incomeamount.value = '';
            }
    }
}

function addexpense(){
    if(expensetype.value == '' || expenseamount.value == ''){
        alert('Enter all inputs')
    }else{
            
            if(expenseamount.value <=0){
                alert('value be cannot empty')
            }else{
                expense += parseInt(expenseamount.value)
                console.log(expense)
                document.getElementById('expencedisplay').innerHTML = expense
                income -= expense
                document.getElementById('incomedisplay').innerHTML = income
                alert('Expense Added Successfully')

                const now = new Date();
                let day = now.getDate();
                let month = now.getMonth() +1;
                let year = now.getFullYear();

                // Display the date
                 date = (`${month}/${day}/${year}`)

                document.getElementById('tableexpensedisplay').innerHTML +=`
                        <tr>
                           <td><h5>${expensetype.value}</h5></td>
                           <td><h5>${expenseamount.value}</h5></td>
                           <td><h5>${income}</h5></td>
                           <td><h5>${date}</h5></td>
                          </tr>
                `
                expensetype.value = '' ;
                expenseamount.value = '';
            }
    }
}

function clearall(){
    income = 0;
    expense = 0;
    document.getElementById('incomedisplay').innerHTML = income
    document.getElementById('expencedisplay').innerHTML = income
    document.getElementById('tableexpensedisplay').innerHTML =``
    document.getElementById('tableincomedisplay').innerHTML  =``
}
