import Angular from './images/angular.jpeg' ;
import Bootstrap from './images/bootstrap.png' ;
import Ccsharp from './images/csharp.jpg' ;
import Kompleweb from './images/web.png' ;
import './Course.css';

const courseMap={
    Angular:Angular,
    Bootstrap:Bootstrap,
    Ccsharp:Ccsharp,
    Kompleweb:Kompleweb
}


function Course({courseName,title}) {
    console.log(courseName);
    return(
        <div>
        <div className="courseDiv">
        <img className="course" src={courseMap[courseName]} alt="course"/>
    </div>
    </div>
    );

  
}

export default Course;