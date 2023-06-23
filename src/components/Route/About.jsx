import Employees from "./Employees";

const About = () => {
    return(
        <div className="about-container">
            {
                Employees.map((Employee) => {
                    const {Name, Age, PhoneNumber, Status, Position, BasicSalary, ImagrUrl} = Employee
                    return(
                        <div key={Employee.id} className="employee-con">
                            <h2>{Name}</h2>
                            <div className="employee-info">
                                <p>AGE: {Age}</p>
                                <p>PHONE NO: {PhoneNumber}</p>
                                <p>STATUS: {Status}</p>
                                <p>POSITION: {Position}</p>
                                <p>BASIC SALARY: {BasicSalary}</p>
                            </div>

                            <img src={ImagrUrl} alt="/" />

                        </div>
                    )
                })
            }
        </div>
    )
};

export default About;