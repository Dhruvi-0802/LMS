import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail(){
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src='/logo512.png' className='img-thumbnail' alt='Course Image' />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>element for abbreviations and acronyms to show the expanded version on hover. 
                    Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
                    <p className="fw-bold">Course By: <Link to="/teacher-detail/1">Teacher 1</Link></p>
                    <p className='fw-bold'>Duration: 3 Hours 30 Minutes </p>
                    <p className='fw-bold'>Total Enrolled: 456 Students </p>
                    <p className='fw-bold'>Rating: 4.5/5 </p>
                </div>
            </div>
            {/*Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Course Videos</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Setup Project
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Start with functional component
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Setup Project
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Start with functional component
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i class='bi-youtube'></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                            <div className="card-body">
                                <h5 className="card-title"><a href="#">Course title</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CourseDetail;