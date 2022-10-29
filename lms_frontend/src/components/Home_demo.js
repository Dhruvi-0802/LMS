function Home() {
  return (
    <div className="container mt-4">
     <h3 className="pb-1 mb-4">Latest Courses </h3>
        <div className ="row">
            <div className='col-md-3'>
                <div className="card">
                {/*Default in public folder*/}
                <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Card title</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;