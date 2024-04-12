let guest = ['damir', 'samir', 'farzod', 'shoxruh']
let name = prompt('Write any name, pls')

if(guest.includes(name)){
    guest.splice(name , 1)
}else{
    alert('Guest  is undefided')
}
console.log(guest);