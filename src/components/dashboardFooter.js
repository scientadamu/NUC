const DashboardFooter = () => {
    return (
        <div>
            <footer className="footer" id="footer">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-md-12 col-sm-12 text-center">
                  Copyright © 2022 <a href="#">Noa</a>. Designed with <span className="fa fa-heart text-danger" /> by <a href="#"> Spruko </a> All rights reserved
                </div>
              </div>
            </div>
          </footer>
        {/* BACK-TO-TOP */}
        <a href="#top" id="back-to-top"><i className="fa fa-long-arrow-up" /></a>
      </div>
    )
}
export default DashboardFooter;