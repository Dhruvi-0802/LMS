import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
function AddCourse(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" id="title" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="video" className="form-label">Course Video</label>
                                    <input type="file" id="video" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="techs" className="form-label">Technologies</label>
                                    <textarea className="form-control" id="techs"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse;