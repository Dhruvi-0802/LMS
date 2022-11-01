import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail(){
    let {course_id}=useParams();
    return (
        <div className="container mt-3 pb-2">
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
                <h5 className="card-header">
                    Course Videos
                </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi-youtube"></i></button>
                        </span>
                        {/* Video Modal Start */}
                        <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* End Video Modal */}
                    </li>
                    <li className="list-group-item">Setup Project
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Start with functional component
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Setup Project
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Start with functional component
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger float-end'><i className='bi-youtube'></i></button>
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