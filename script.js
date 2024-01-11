function confirm(){
    var name,email,event,phone,cc;

    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    package=document.getElementById("package").value;
    phone=document.getElementById("phone").value;
    comments=document.getElementById("comments").value;

    if(name==''||email==''||package==''||phone==''||comments==''){
        //alert('All fields are required');
        if(name==''){
            document.getElementById('nameErr').innerHTML="Name is required";
            document.getElementById('name').style="border-color :red";
        }
        if(email==''){
            document.getElementById('emailErr').innerHTML="Email is required";
            document.getElementById('email').style="border-color :red";
        }
        if(package==''){
            document.getElementById('packageErr').innerHTML="Event is required";
            document.getElementById('package').style="border-color :red";
        }
        if(phone==''){
            document.getElementById('phoneErr').innerHTML="Phone is required";
            document.getElementById('phone').style="border-color :red";
        }
        if(comments==''){
            document.getElementById('commentsErr').innerHTML="Credit Card is required";
            document.getElementById('comments').style="border-color :red";
        }
        email.preventDefault();
    }

}
document.getElementById("booking").addEventListener('submit', validate)

