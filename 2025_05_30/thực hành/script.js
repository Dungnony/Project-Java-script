 student = {id:"ript001",name:"Nam Chan Hoan",salary:40000000}  
document.write(student.id+" "+student.name+" "+student.salary+"<br>");  

 var student=new Object();  
    student.id="ript001";  
    student.name="Hoang Trung";  
    student.salary=3000;  
    document.write(student.id+" "+student.name+" "+student.salary+"<br>");  

function student(id,name,salary){  
this.id = id;  
this.name = name;  
this.salary = salary;  
}  
 class Person{
            name;
            age;
            salary;
            hello(){
                document.write("Hello "+ this.name);
             }

             changeSalary(newSalary){
                this.salary = newSalary;
             }

        }

        a = new Person();
        a.name = "Park Jung Hoan";
        a.hello();
        a.salary = 1;
        document.write('<br>'+a.name + ': ' + a.salary);
        a.changeSalary(12);
        document.write('<br>'+a.name + ': ' + a.salary);
    
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15
class Person{
            name;
            age;
            salary;
            constructor() {  
                document.write("Hihi");
            }  
            hello(){
                document.write("Hello "+ this.name);
             }
        }